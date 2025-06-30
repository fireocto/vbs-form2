import React from 'react';

const YearSelector = ({ year, setYear, years = [2024, 2025] }) => {
  return (
    <div
      style={{
        marginTop: '2vh',
        marginBottom: '2vh',
        marginLeft: '4vw',   // added horizontal margin
        marginRight: '4vw',  // added horizontal margin
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1.25rem',
        color: '#333',
        fontWeight: '600',
      }}
    >
      <label htmlFor="year-select" style={{ minWidth: '6rem' }}>
        Select Year:
      </label>
      <select
        id="year-select"
        value={year}
        onChange={e => setYear(parseInt(e.target.value, 10))}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          cursor: 'pointer',
          minWidth: '8rem',
          boxShadow: '0 0.1rem 0.3rem rgba(0,0,0,0.1)',
          transition: 'border-color 0.3s ease',
        }}
      >
        {years.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
