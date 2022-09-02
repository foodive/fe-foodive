import React from "react";
import "../Styles/global.scss"
import options from "../options_data";

const Options = ({ cuisine, setCuisine }) => {
  const optionButtons = options.map((option, index) => {
    if (cuisine === option.requestName) {
      return <button key={index} className="option-checked" id={option.requestName}>{option.displayName}</button>
    }
    return <button key={index} className="option-unchecked" id={option.requestName} onClick={(event) => {setCuisine(event.target.id)}}>{option.displayName}</button>
  })

  return (
    <section className="options-container">
      {optionButtons}
    </section>
  )
}

export default Options;