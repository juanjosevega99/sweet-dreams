import { useState } from "react";
import "./App.css";

import { WakeUp } from "./components/Wakeup/WakeUp";

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

  const handleHourChange = (event: any) => {
    setSelectedHour(parseInt(event.target.value));
  };

  const handleMinuteChange = (event: any) => {
    setSelectedMinute(parseInt(event.target.value));
  };

  const handleAmPmChange = (event: any) => {
    selectedAmPm(parseInt(event.target.value));
  };

  const handleWakeUp = () => {
    setShowWakeUpTime(true);
  };

  if (showWakeUpTime) {
    return (
      <div>
        <WakeUp
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          selectedAmPm={selectedAmPm}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>sweet dream</h1>
        <p>I'd like to wake up at ...</p>
        <div>
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
            <select onChange={handleMinuteChange}>
              {minutes.map((minute) => (
                <option key={minute} value={minutes}>
                  {minute}
                </option>
              ))}
            </select>
            <select id="ampm" onChange={handleAmPmChange}>
              <option value="">AM</option>
              <option value="">PM</option>
            </select>
          </div>
          <input
            type="button"
            value="Go"
            className="button-primary"
            // onClick={handleSleepButtonClick}
          />
          <p>or, find out when to wake up:</p>
          <input
            type="button"
            value="Sleep"
            className="button-primary"
            onClick={handleWakeUp}
          />
        </div>
      </div>
    );
  }
}

export default App;
