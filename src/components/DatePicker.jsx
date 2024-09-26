import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';
import { useDateContext } from './DateContext';

const DatePicker = () => {
  const { setStartDate, setEndDate } = useDateContext();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Recurring Date Picker</h1>
      <input
        type="date"
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="mt-4 p-2 border rounded"
      />
      <input
        type="date"
        onChange={(e) => setEndDate(new Date(e.target.value))}
        className="mt-2 p-2 border rounded"
      />
      <RecurrenceOptions />
      <DatePreview />
    </div>
  );
};

export default DatePicker;
