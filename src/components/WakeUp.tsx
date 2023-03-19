interface WakeUpProps {
  selectedHour: number;
  selectedMinute: number;
  selectedAmPm: string;
  goBack: any;
}

export function WakeUp({
  selectedHour,
  selectedMinute,
  selectedAmPm,
  goBack,
}: WakeUpProps) {
  const handleGoBackClick = () => {
    goBack();
  };

  let wakeUpHour = selectedHour % 12;
  if (selectedAmPm === "PM") {
    wakeUpHour += 12;
  }

  function findTimeInCycles(cyclesToSleep: number) {
    const sleepCycleMinutes = 90; // 1.5 hours per sleep cycle
    const totalSleepMinutes = sleepCycleMinutes * cyclesToSleep;
    const timeToFallAsleepMinutes = 15; // 15 minutes to fall asleep
    const totalMinutesNeeded = totalSleepMinutes + timeToFallAsleepMinutes;

    const wakeUpTime = new Date();
    wakeUpTime.setHours(wakeUpHour);
    wakeUpTime.setMinutes(selectedMinute);

    const sleepTime = new Date(
      wakeUpTime.getTime() - totalMinutesNeeded * 60000
    ); // 60000 ms per minute

    const sleepHour = sleepTime.getHours() % 12;
    const sleepMinute = sleepTime.getMinutes();
    const sleepAmPm = sleepTime.getHours() >= 12 ? "PM" : "AM";

    return `${sleepHour}:${sleepMinute} ${sleepAmPm}`;
  }

  const sixCycles = findTimeInCycles(6);
  const fiveCycles = findTimeInCycles(5);

  return (
    <div className="container">
      <h3>
        I've to wake up at {selectedHour}:{selectedMinute} {selectedAmPm}
      </h3>
      <p>Go to bed at one of the following times:</p>

      <div className="box-times">
        <div className="time">{sixCycles} for 6 cycles</div>
        <div className="time">{fiveCycles} for 5 cycles</div>
      </div>

      <input
        type="button"
        value="Go back"
        className="button-primary"
        onClick={handleGoBackClick}
      />
    </div>
  );
}
