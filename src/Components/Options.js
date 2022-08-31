import React from "react";
import "../Styles/global.scss"
import options from "../options_data";

const Options = () => {
const optionButtons = options.map((option, index) => {
  return <button key={index} className="option-unchecked">{option}</button>
})
    return (
        <section className="options-container">
          {optionButtons}
        </section>
    )
}

export default Options