import React, { useState }  from 'react';
import './ProfileDropout.css';
import profilePic from './pictures/user-avatar.svg';


const ProfileDropout = () => {
    const [isArrowDown, toggleArrow] = useState(true);

    function toggleSubMenu () {
        const subMenu = document.querySelector('.sub-menu-wrap');
        subMenu.classList.toggle('open-menu');
        toggleArrow(!isArrowDown);
    }

    function renderArrow () {
        if (!isArrowDown) {
            return (
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 7.79001L6 3.20501L10.585 7.79001L12 6.37501L6 0.375008L0 6.37501L1.415 7.79001Z" fill="white"/>
                </svg>
            )
        } else {
            return (
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="white"/>
                </svg>
            )
        }
    }

    return (
        <div>
            <div className="profile" onClick={toggleSubMenu}>
                <img src={profilePic} alt='profile' className='profile-pic'></img>
                {renderArrow()}
            </div>
            <div className='sub-menu-wrap'>
                <div className="sub-menu-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7.7782" width="11" height="11" transform="rotate(45 7.7782 0)" fill="white"/>
                    </svg>
                </div>
                <div className='sub-menu'>
                    <ul className='sub-menu-options'>
                        <li className='sub-menu-options-item'>Profile</li>
                        <li className='sub-menu-options-item'>Log Out</li>
                    </ul>
                </div>
            </div>  
        </div>     
    )
}

export default ProfileDropout;