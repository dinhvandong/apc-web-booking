import React, { useState } from 'react';

const MonthPicker = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderDays = () => {
    if (selectedMonth && selectedYear) {
      const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
      const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

      return daysArray.map((day) => (
        <div
          key={day}
          className="p-2 text-center border border-gray-300"
        >
          {day}
        </div>
      ));
    }

    return null;
  };

  return (
    <div className='w-full h-auto'>
      <div className="flex mb-4">
        <div className="mr-2">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="block px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            {/* Add more months here */}
          </select>
        </div>
        <div className="mr-2">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="block px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more years here */}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="font-bold text-center">Sun</div>
        <div className="font-bold text-center">Mon</div>
        <div className="font-bold text-center">Tue</div>
        <div className="font-bold text-center">Wed</div>
        <div className="font-bold text-center">Thu</div>
        <div className="font-bold text-center">Fri</div>
        <div className="font-bold text-center">Sat</div>
        {renderDays()}
      </div>
    </div>
  );
};

export default MonthPicker;