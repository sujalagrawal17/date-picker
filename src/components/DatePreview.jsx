import React from 'react';
import { useDateContext } from './DateContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence } = useDateContext();

  // Function to calculate recurring dates
  const getRecurringDates = () => {
    const dates = [];
    // Logic to compute recurring dates based on recurrence rules
    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        switch (recurrence.type) {
          case 'daily':
            currentDate.setDate(currentDate.getDate() + recurrence.interval);
            break;
          case 'weekly':
            currentDate.setDate(currentDate.getDate() + recurrence.interval * 7);
            break;
          case 'monthly':
            currentDate.setMonth(currentDate.getMonth() + recurrence.interval);
            break;
          case 'yearly':
            currentDate.setFullYear(currentDate.getFullYear() + recurrence.interval);
            break;
          default:
            break;
        }
      }
    }
    return dates;
  };

  return (
    <div className="mt-4">
      <h2 className="font-semibold">Selected Recurrences:</h2>
      <div>
        {getRecurringDates().map((date, index) => (
          <div key={index}>{date.toLocaleDateString()}</div>
        ))}
      </div>
    </div>
  );
};

export default DatePreview;
