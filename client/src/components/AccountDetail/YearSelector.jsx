import React from 'react';
import TextField from '@mui/material/TextField';

const YearSelector = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Generate years from 1910 to the current year
  const years = [];
  for (let year = 1910; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <input
      id="year"
      label="Select a Year"
      type="number"
      InputProps={{
        inputProps: {
          min: 1910,
          max: currentYear,
          list: 'years-list'
        }
      }}
      select
      SelectProps={{
        native: true,
      }}
    >
      <datalist id="years-list">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </datalist>
    </input>
  );
};

export default YearSelector;