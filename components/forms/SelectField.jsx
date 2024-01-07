"use client";
import Select from "react-select";

const SELECT_LABEL_STYLES =
  "appearance-none block text-base font-semibold text-neutral-700";

export default function SelectField(props) {
  const {
    label,
    name,
    id,
    defaultValue,
    options,
    onChange,
    placeholder,
    value,
    isMulti = false,
    isClearable = false,
  } = props;

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "rgba(5, 150, 105)" : provided.borderColor,
      boxShadow: state.isFocused
        ? "0 0 0 2px rgba(25, 200, 105)"
        : provided.boxShadow,
      border: state.isFocused ? "none" : provided.border,
      paddingTop: "3px",
      paddingBottom: "5px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor:
        (state.isFocused || state.isSelected) && !state.isMulti
          ? "rgb(5, 150, 105)"
          : provided.backgroundColor,
      color:
        (state.isFocused || state.isSelected) && !state.isMulti
          ? "white"
          : "rgb(15, 23, 42)",
      "&:hover": {
        backgroundColor: "rgb(4, 120, 87)",
        color: "white",
        cursor: "pointer",
      },
      overflow: "hidden",
      fontSize: "14px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgb(15, 23, 42)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    input: (provided) => ({
      ...provided,
      "input:focus": {
        boxShadow: "none",
      },
    }),
  };
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className={SELECT_LABEL_STYLES}>
        {label}
      </label>

      <Select
        name={name}
        id={id}
        value={value}
        styles={customStyles}
        classNamePrefix="select2-selection"
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => "No options"}
        isMulti={isMulti}
        onChange={onChange}
        isClearable={isClearable}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
}
