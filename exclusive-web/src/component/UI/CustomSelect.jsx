import React from "react";
import Select from "react-select";
import "./CustomSelect.css";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "black",
    border: "none",
    boxShadow: "none",
    minHeight: "35px",
    color: "white",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#222"
      : state.isSelected
      ? "black"
      : "black",
    color: "white",
    ":active": {
      backgroundColor: "black", // ⛔ no flash
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

function CustomSelect({ value, onChange, options }) {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      classNamePrefix="custom-select"
      isSearchable={true}
      styles={customStyles} // this is the key to style all parts
    />
  );
}

export default CustomSelect;
