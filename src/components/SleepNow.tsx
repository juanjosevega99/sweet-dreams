export function SleepNow({ goBack }: any) {
  const handleGoBackClick = () => {
    goBack();
  };

  function findWakeUpTime(cyclesToSleep: number) {
    const sleepCycleMinutes = 90; // 1.5 hours per sleep cycle
    const totalSleepMinutes = sleepCycleMinutes * cyclesToSleep;
    const timeToFallAsleepMinutes = 15; // 15 minutes to fall asleep
    const totalMinutesNeeded = totalSleepMinutes + timeToFallAsleepMinutes;

    const sleepTime = new Date(Date.now() + totalMinutesNeeded * 60000); // 60000 ms per minute

    const sleepHour = sleepTime.getHours() % 12 || 12;
    const sleepMinute = sleepTime.getMinutes();
    const sleepAmPm = sleepTime.getHours() >= 12 ? "PM" : "AM";

    return `${sleepHour}:${sleepMinute
      .toString()
      .padStart(2, "0")} ${sleepAmPm}`;
  }

  const fourCycles = findWakeUpTime(4);
  const fiveCycles = findWakeUpTime(5);
  const sixCycles = findWakeUpTime(6);

  return (
    <div className="container">
      <h1>sweet dream</h1>
      <p>Sleep now, wake up at:</p>

      <div className="box-times">
        <div className="time">{fourCycles} for 4 cycles</div>
        <div className="time">{fiveCycles} for 5 cycles</div>
        <div className="time">{sixCycles} for 6 cycles</div>
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
