import React from "react";

import './OptionSelect.css';

const OptionSelect = (props) => {
    return (
            <select id={props.id} className='select-form'>
                <option hidden disabled selected className="select-field-first"></option>
            {props.option}
            </select>
    )
}

export default OptionSelect;