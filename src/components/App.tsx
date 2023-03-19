import { useState } from "react";
import { WakeUp } from "./WakeUp";
import { SleepNow } from "./SleepNow";

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = [
  { value: 0, label: "00" },
  { value: 5, label: "05" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
  { value: 25, label: "25" },
  { value: 30, label: "30" },
  { value: 35, label: "35" },
  { value: 40, label: "40" },
  { value: 45, label: "45" },
  { value: 50, label: "50" },
  { value: 55, label: "55" },
];

function App() {
  const [selectedHour, setSelectedHour] = useState(7);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedAmPm, setSelectedAmPm] = useState("AM");
  const [showWakeUpTime, setShowWakeUpTime] = useState(false);
  const [showSleepNow, setShowSleepNow] = useState(false);

  const handleHourChange = (event: any) => {
    setSelectedHour(parseInt(event.target.value));
  };

  const handleMinuteChange = (event: any) => {
    setSelectedMinute(parseInt(event.target.value));
  };

  const handleAmPmChange = (event: any) => {
    setSelectedAmPm(event.target.value);
  };

  const handleWakeUp = () => {
    setShowWakeUpTime(true);
  };

  const handleSleepNow = () => {
    setShowSleepNow(true);
  };

  const handleGoBack = () => {
    setShowWakeUpTime(false);
    setShowSleepNow(false);
  };

  return (
    <div className="container">
      {showWakeUpTime ? (
        <WakeUp
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          selectedAmPm={selectedAmPm}
          goBack={handleGoBack}
        />
      ) : showSleepNow ? (
        <SleepNow goBack={handleGoBack} />
      ) : (
        <>
          <h1>sweet dream</h1>
          <p>I'd like to wake up at ...</p>
          <div className="waketime">
            <select id="" value={selectedHour} onChange={handleHourChange}>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <select value={selectedMinute} onChange={handleMinuteChange}>
              {minutes.map((minute) => (
                <option key={minute.value} value={minute.value}>
                  {minute.label}
                </option>
              ))}
            </select>
            <select id="ampm" value={selectedAmPm} onChange={handleAmPmChange}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div>
            <input
              type="button"
              value="Go"
              className="button-primary"
              onClick={handleWakeUp}
            />
            <p>or, find out when to wake up:</p>
            <input
              type="button"
              value="Sleep Now 🛌"
              className="button-primary"
              onClick={handleSleepNow}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
