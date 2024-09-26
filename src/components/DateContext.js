import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    type: 'daily',
    interval: 1,
    daysOfWeek: [],
    nthDay: null,
  });

  return (
    <DateContext.Provider value={{ startDate, setStartDate, endDate, setEndDate, recurrence, setRecurrence }}>
      {children}
    </DateContext.Provider>
  );
};
