import React  from 'react';
import {NavLink} from 'react-router-dom';
import './TaskCard.css';

const TaskCard = (props) => {
    return (
        <div className='card-wrapper'>
            <NavLink to={props.link} className="task-card">{props.title}</NavLink>
            <button className='delete-card-btn' onClick={props.deleteCard}>x</button>
        </div>
    )
}

export default TaskCard;