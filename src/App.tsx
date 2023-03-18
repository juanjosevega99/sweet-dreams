import { useState } from "react";
import "./App.css";

import { WakeUp } from "./components/WakeUp";
import { SleepNow } from "./components/SleepNow";

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
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

  if (showWakeUpTime) {
    return (
      <WakeUp
        selectedHour={selectedHour}
        selectedMinute={selectedMinute}
        selectedAmPm={selectedAmPm}
        goBack={handleGoBack}
      />
    );
  } else if (showSleepNow) {
    return <SleepNow goBack={handleGoBack} />;
  } else {
    return (
      <div className="container">
        <h1>sweet dream</h1>
        <p>I'd like to wake up at ...</p>
        <div className="waketime">
          <select
            name="hour"
            id=""
            value={selectedHour}
            onChange={handleHourChange}
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select value={selectedMinute} onChange={handleMinuteChange}>
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <select id="ampm" value={selectedAmPm} onChange={handleAmPmChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
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
    );
  }
}

export default App;
