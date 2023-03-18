interface WakeUpProps {
  selectedHour: number
  selectedMinute: number
  selectedAmPm: string
}

export function WakeUp({ selectedHour, selectedMinute, selectedAmPm }: WakeUpProps) {
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
    </div>
  );
}
