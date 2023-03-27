import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import './Description.css';

const Description = (props) => {
    useEffect(() => {
        if (curTask.description !== '') {
        setTextAreaValue(curTask.description);
        } else {
            setTextAreaValue('This task has no description. Type new description here!');
        }
    }, []);
    const taskId = window.location.pathname.replace('/tasks/', '');
    const [textAreaValue, setTextAreaValue] = useState('');

    let curTask;
    let curArrIndex;
    props.data.forEach((e, i) => {
        const curAssignment = e.assignments.find(x => x.id === `${taskId}`);
        if (curAssignment !== undefined) {
            curTask = curAssignment;
            curArrIndex = i;
        }
    })

    function onInput (e) {
        e.preventDefault();

        setTextAreaValue(e.target.value);
    }
    
    function onEnter (e) {
        if (e.code === 'Enter') {
            e.preventDefault();
            
            const oldStorage = props.data;
            const newDescription = e.target.value;
            oldStorage[curArrIndex].assignments.find(x => x.id === `${taskId}`).description = newDescription;
            localStorage.setItem('data', JSON.stringify(oldStorage));
            props.setData([...oldStorage]);

            e.target.blur();
        }

        if (e.code === 'Escape') {
            e.preventDefault();
            
            e.target.blur();
        }
    }

    return (
        <main>
            <div className='description-box'>
                <div className="description-wrapper">
                    <h2 className='task-title'>{curTask.assignment}</h2>
                    <NavLink to='/'><button className='close-btn'>x</button></NavLink>
                    <textarea className='task-description' value={textAreaValue} onInput={onInput} onKeyDown={onEnter}></textarea>
                </div>
            </div>
        </main>
        
    )
}

export default Description;