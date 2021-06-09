import React, { useState } from "react";
import "./input.css";
const Question = ({nameLabel = 'Default', typeValue= 'text'}) => {

  const [comparison, setComparison] = useState(false);
  const inputValueUpdate = e => e.target.value !== "" ? setComparison(true) : setComparison(false);

  return (
    <>
        <div className="container-input">
          <label htmlFor="" className={`label ${comparison?'active-input':'off-input'}`}>
            {nameLabel}
          </label>
          <input
            type={typeValue}
            className="input"
            onChange={inputValueUpdate}
            onFocus={() => {setComparison(true)}}
            onBlur={inputValueUpdate}
          />
        </div>
    </>
  );
};

export default Question;
