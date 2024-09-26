import React from 'react';
import { useDateContext } from './DateContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDateContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecurrence({ ...recurrence, [name]: value });
  };

  return (
    <div className="mt-4">
      <label className="block">Recurrence Type:</label>
      <select name="type" value={recurrence.type} onChange={handleChange} className="mt-2 p-2 border rounded">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input
        type="number"
        name="interval"
        value={recurrence.interval}
        onChange={handleChange}
        className="mt-2 p-2 border rounded"
        placeholder="Every X"
      />
      {/* Additional fields for specific days or nth days can go here */}
    </div>
  );
};

export default RecurrenceOptions;
