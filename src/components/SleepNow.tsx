export function SleepNow({ goBack }: any) {
  const handleGoBackClick = () => {
    goBack();
  };

  // TODO: improve this function
  function findCyclesToSleep(cyclesToSleep: number) {
    const sleepCycleMinutes = 90; // 1.5 hours per sleep cycle
    const totalSleepMinutes = sleepCycleMinutes * cyclesToSleep;
    const timeToFallAsleepMinutes = 15; // 15 minutes to fall asleep
    const totalMinutesNeeded = totalSleepMinutes + timeToFallAsleepMinutes;

    const wakeUpTime = new Date();
    const sleepTime = new Date(
      wakeUpTime.getTime() - totalMinutesNeeded * 60000
    ); // 60000 ms per minute

    const sleepHour = sleepTime.getHours() % 12;
    const sleepMinute = sleepTime.getMinutes();
    const sleepAmPm = sleepTime.getHours() >= 12 ? "PM" : "AM";

    return `${sleepHour}:${sleepMinute} ${sleepAmPm}`;
  }

  const fiveCycles = findCyclesToSleep(5);
  const sixCycles = findCyclesToSleep(6);

  return (
    <div>
      <h1>sleep now</h1>
      <p>Sleep now, wake up at:</p>

      <div className="box-times">
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
