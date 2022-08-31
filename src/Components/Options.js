import React from "react";
import "../Styles/global.scss"
import options from "../options_data";

const Options = ({ cuisine, setCuisine }) => {
  const optionButtons = options.map((option, index) => {
    if (cuisine === option) {
      return <button key={index} className="option-checked" id={option}>{option}</button>
    }
    return <button key={index} className="option-unchecked" id={option} onClick={(event) => {setCuisine(event.target.id)}}>{option}</button>
  })
  return (
    <section className="options-container">
      {optionButtons}
    </section>
  )
}

export default Options;