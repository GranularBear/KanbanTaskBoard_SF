import React from "react";
import './Footer.css';

const Footer = (props) => {
    let activeTasksCounter = 0;
    let finishedTasksCounter = 0;
    const data = props.data;

    data.forEach(e => {
        if (e.title !== data[data.length - 1].title) {
            activeTasksCounter += e.assignments.length;
        } else {
            finishedTasksCounter += e.assignments.length;
        }
    })    

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-counters">
                    <div className="footer-counter-active">Active tasks: {activeTasksCounter}</div>
                    <div className="footer-counter-finished">Finished tasks: {finishedTasksCounter}</div>
                </div>
                <div className="done-by-footer">Kanban board by Ivan Drobyshev, 2023</div>
            </div>
        </footer>
    )
}

export default Footer;