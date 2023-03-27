import React from "react";
import './ChooseCardInput.css';

import OptionSelect from "../OptionSelectComp/OptionSelect";
import SubmitBtn from "../SubmitBtnComp/SubmitBtn";

const ChooseCardInput = (props) => {
    return (
        <form className='submit-form others disabled' onSubmit={props.onSubmit} data-belongsto={props.data}>
            <OptionSelect id={props.id} option={props.option} />
            <SubmitBtn />
        </form>
    )
}

export default ChooseCardInput;