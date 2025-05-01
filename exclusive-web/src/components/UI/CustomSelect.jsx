import React from 'react';
import Select from 'react-select';
import "./CustomSelect.css"

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    border: 'none',
    boxShadow: 'none',
    minHeight: '35px',
    color: 'white',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    borderLeft: 'none', // Removes the dividing line
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white',
  }),
  input: (provided) => ({
    ...provided,
    color: 'white', 
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'white',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#444' 
      : state.isFocused
      ? '#222' 
      : 'black', 
    color: 'white',
    cursor: 'pointer',
    ':active': {
      backgroundColor: state.isSelected ? '#444' : '#222', 
      color: 'white',
    },
  }),
};

function CustomSelect({ options, value, onChange, placeholder }) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder={placeholder}
      styles={customStyles}
      className="reactSelect"
      classNamePrefix="custom-select"
      isSearchable={true}
    />
  );
}

export default CustomSelect;
