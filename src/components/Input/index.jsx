import React, { useState } from "react";
import "./input.css";
const Input = ({nameLabel = 'Default', typeValue= 'text', colorLabel = '#fff', colorInput = '#fff'}) => {

  const [comparison, setComparison] = useState(false);
  const inputValueUpdate = e => e.target.value !== "" ? setComparison(true) : setComparison(false);

  return (
    <>
        <div className="container-input">
          <label 
          htmlFor="" 
          className={`label ${comparison?'active-input':'off-input'}`}
          style={{color: colorLabel}}
          >
            {nameLabel}
          </label>
          <input
            type={typeValue}
            className="input"
            onChange={inputValueUpdate}
            onFocus={() => {setComparison(true)}}
            onBlur={inputValueUpdate}
            style={{color: colorInput, borderBottom:`1px solid ${colorInput}`}}
          />
        </div>
    </>
  );
};

export default Input;
