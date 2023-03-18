interface WakeUpProps {
  selectedHour: number
  selectedMinute: number
  selectedAmPm: string
  goBack: any
}

export function WakeUp({ selectedHour, selectedMinute, selectedAmPm, goBack }: WakeUpProps) {
  const handleGoBackClick = () => {
    goBack();
  };

  let wakeUpHour = selectedHour % 12;
  if (selectedAmPm === "PM") {
    wakeUpHour += 12;
  }

  return (
    <div>
      <p>
        {selectedHour} , {selectedMinute}, {selectedAmPm}
        {/* {wakeUpHour12}:{wakeUpMinute.toString().padStart(2, "0")} {wakeUpAmPm} */}
      </p>
      <input
            type="button"
            value="Go back"
            className="button-primary"
            onClick={handleGoBackClick}
          />
    </div>
  );
}
