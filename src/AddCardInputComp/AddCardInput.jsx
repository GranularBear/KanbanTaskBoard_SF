import React from  'react';
import './AddCardInput.css';

import SubmitBtn from '../SubmitBtnComp/SubmitBtn';

const AddCardInput = (props) => {
    return (
        <form className='submit-form backlog disabled' onSubmit={props.onSubmit}>
            <input className='input-add-task' type='text' onChange={props.onChange} value={props.backlogInputValue} />
            <SubmitBtn />
        </form>
    )
}

export default AddCardInput;