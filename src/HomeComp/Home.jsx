import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './Home.css';
import TaskBox from '../TaskBoxComp/TaskBox';

const Home =  (props) => {
    const [backlogInputValue, setBacklogInputValue] = useState('');

    function handleBacklogAdd () {
        let backlogInputField = document.querySelector('.submit-form.backlog');
        let backlogAddBtn = document.querySelector('.add-card-btn');
        backlogAddBtn.classList.toggle('active');
        backlogInputField.classList.toggle('disabled');
    }

    function handleBacklogSubmit (e) {
        e.preventDefault();

        if (backlogInputValue !== "") {
            const oldStorage = props.data;
            const newBacklogTask = {
                id: uuidv4(),
                assignment: `${backlogInputValue}`,
                description: '',
            }
            oldStorage[0].assignments.push(newBacklogTask);
            localStorage.setItem('data', JSON.stringify(oldStorage))
            props.setData([...oldStorage]);
            const backlogInputField = e.target.parentNode.querySelector('.submit-form.backlog');
            const backlogAddBtn = e.target.parentNode.querySelector('.add-card-btn');
            backlogAddBtn.classList.toggle('active');
            backlogInputField.classList.toggle('disabled');
            setBacklogInputValue('');
        }
    }

    function handleOtherCardsAdd (e) {
        const cardAddBtn = e.target.parentNode.querySelector('.add-card-btn');
        const cardInputField = e.target.parentNode.querySelector('.submit-form.others');

        cardAddBtn.classList.toggle('active');
        cardInputField.classList.toggle('disabled');
    }

    function handleOtherCardsSubmit (e) {
        e.preventDefault();
        
        const cardAddBtn = e.target.parentNode.querySelector('.add-card-btn');
        const cardInputField = e.target.parentNode.querySelector('.submit-form.others');

        cardAddBtn.classList.toggle('active');
        cardInputField.classList.toggle('disabled');

        if (e.target.firstChild.value === '') {
            return;
        }
        const oldStorage = props.data;
        const curTitle = e.target.dataset.belongsto;
        const curArr = oldStorage.find(x => x.title === `${curTitle}`);
        const curArrIndex = oldStorage.findIndex(x => x === curArr);
        const prevStorageArrIndex = curArrIndex - 1; 
        const prevArr = oldStorage[prevStorageArrIndex];
        const prevAssignments = prevArr.assignments;
        const selectedTaskName = e.target.firstChild.value;
        const selectedTaskEntry = prevAssignments.find(x => x.assignment === `${selectedTaskName}`);
        const newPrevAssignments = prevAssignments.filter(x => x.assignment !== `${selectedTaskName}`);
        oldStorage[prevStorageArrIndex].assignments = newPrevAssignments;
        oldStorage[curArrIndex].assignments.push(selectedTaskEntry);
        localStorage.setItem('data', JSON.stringify(oldStorage))
        props.setData([...oldStorage]);

    }

    return (
        <>
            <main>
                <div className='tasks-wrapper'>
                    <TaskBox title='Backlog' data={props.data} onClick={handleBacklogAdd} onSubmit={handleBacklogSubmit} backlogInputValue={backlogInputValue} setBacklogInputValue={setBacklogInputValue} setData={props.setData}/>
                    <TaskBox title='Ready' data={props.data} onClick={handleOtherCardsAdd} onSubmit={handleOtherCardsSubmit} setData={props.setData}  />
                    <TaskBox title='In Progress' data={props.data} onClick={handleOtherCardsAdd} onSubmit={handleOtherCardsSubmit} setData={props.setData} />
                    <TaskBox title='Finished' data={props.data} onClick={handleOtherCardsAdd} onSubmit={handleOtherCardsSubmit} setData={props.setData}  />
                </div>
            </main>
        </>
        
    )
}

export default Home; 