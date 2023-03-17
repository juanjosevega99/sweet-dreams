import { useState } from "react";
import "./App.css";

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

function App() {
  const [selectedHour, setSelectedHour] = useState(hours[0]);

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  return (
    <div className="container">
      <h1>sweet dreams</h1>
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
          <select>
            {minutes.map((minute) => (
              <option key={minute} value={minutes}>
                {minute}
              </option>
            ))}
          </select>
          <select id="ampm">
            <option value="">AM</option>
            <option value="">PM</option>
          </select>
        </div>
        <input type="button" value="sleep" className="button-primary" />
        <p>or, find out when to wake up:</p>
        <input type="button" value="sleep" className="button-primary" />
      </div>
    </div>
  );
}

export default App;
