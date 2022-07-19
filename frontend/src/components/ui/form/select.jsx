import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "../../../lib/hooks/use-outside-click";


const Select = ({ options, selectProps, value, error = false, register, name }) => {

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    const element = document.getElementById(name);
    console.log("element", element);
    if (element) {
      element.value = selected;
    }
  }, [selected]);

  return (
    <div isOpen={isOpen} error={error} className="border shadow rounded-xl">
      <select
        {...selectProps}
        {...register(name)}
        id={name}
        name={name}
        className="html-select"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div
        ref={selectRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="custom-select-wrapper"
      >
        <div className={`custom-select ${isOpen && "open"}`}>
          <div className="custom-select__trigger p-4">
            <span>
              {options.find((item) => item.value === selected)?.label ||
                "Select"}
            </span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {options.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  setSelected(item.value);
                }}
                className="option-container"
              >
                <span
                  className={`custom-option ${
                    selected === item.value && "selected"
                  } `}
                  data-value={item.value}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
