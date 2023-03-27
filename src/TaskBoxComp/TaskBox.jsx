import React, { useEffect }  from 'react';

import './TaskBox.css'
import TaskCard from '../TaskCardComp/TaskCard';
import AddCardInput from '../AddCardInputComp/AddCardInput';
import ChooseCardInput from '../ChooseCardInputComp/ChooseCardInput';

const TaskBox = (props) => {
    useEffect(() => {
        const rendredOptions = document.querySelectorAll('.add-card-option');
        rendredOptions.forEach(e => {
            if (e.textContent.length>30) {
                e.textContent = e.textContent.substring(0, 30)+'...';
            }
        });
        disableButton();
    });
    
    const data = props.data.find(x => x.title === `${props.title}`);
    const {assignments} = data;
    const compId = props.title.replaceAll(/\s/g, '');

    function handleChange (e) {
        props.setBacklogInputValue(e.target.value);
    }

    const task = assignments.map ((e) => {
        const taskLink = `/tasks/${e.id}`;
        return (
            <TaskCard key={e.assignment} title={e.assignment} description={e.description} link={taskLink} deleteCard={deleteCard} />
        ) 
    });

    function deleteCard (e) {
        const oldStorage = props.data;
        const curTaskName = e.target.previousSibling.textContent;
        let curTaskEntryIndex = assignments.findIndex(x => x.assignment === curTaskName);
        const curStorageArrIndex = oldStorage.findIndex(x => x.title === `${props.title}`);
        oldStorage[curStorageArrIndex].assignments.splice(curTaskEntryIndex, 1);
        localStorage.setItem('data', JSON.stringify(oldStorage));
        props.setData([...oldStorage]);
    }


    const previousStorageArrIndex = props.data.findIndex(e => e.title === props.title) - 1; 
    let previousAssignments = [];
    if (previousStorageArrIndex >= 0) {
        previousAssignments = props.data[previousStorageArrIndex].assignments;
    }

    const option = previousAssignments.map ((e) => {
        return <option className='add-card-option' key={`'option-' + ${e.assignment} + '-prevArr'}`} value={e.assignment}>{e.assignment}</option>
    });

    function disableButton () {
        const oldStorage = props.data;
        const curArr = oldStorage.find(x => x.title === `${props.title}`);
        const curArrIndex = oldStorage.findIndex(x => x === curArr);
        const prevStorageArrIndex = curArrIndex - 1; 
        const prevArr = oldStorage[prevStorageArrIndex];
        const btn = document.querySelector(`#${compId + '-add-btn'}`);
        if(props.data[0].title !== props.title && prevArr.assignments.length === 0) {
            btn.disabled = true;
            btn.classList.add('disabled');
        } else {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    }

    function initiateInputForm () {
        if (props.title === props.data[0].title) {
            return <AddCardInput onSubmit={props.onSubmit} onChange={handleChange} backlogInputValue={props.backlogInputValue} />

        } else {
            return <ChooseCardInput onSubmit={props.onSubmit} data={props.title} id={props.title + '-select'} option={option} />

        }
    }


    return (
        <div className="task-box" id={compId + '-box'}>
            <div className="task-box-title">{props.title}</div>
            <>
            {task}
            </>
            {initiateInputForm()}
            <button className='add-card-btn active' onClick={props.onClick} id={compId + '-add-btn'}>+ Add card</button>
        </div>
    )
}

export default TaskBox;