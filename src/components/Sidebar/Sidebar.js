import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Sidebar = () => {
  return (
     <>
        <div className='sidebar'>
            <ul className='sidebar-lists'>
               <li>
                  <Link to="/">Getting Started</Link>
                </li>
               <li>
                  <Link to="alert">Alerts</Link>
                </li>
                <li>
                  <Link to="avatar">Avatar</Link>
                </li>
                <li>
                  <Link to="badges">Badges</Link>
                </li>
                <li>
                  <Link to="buttons">Buttons</Link>
                </li>
                <li>
                  <Link to="cards">Cards</Link>
                </li>
                <li>
                  <Link to="grid">Grid</Link>
                </li>
                <li>
                  <Link to="input">Input</Link>
                </li>
                <li>
                  <Link to="list">List</Link>
                </li>
                <li>
                  <Link to="navbars">Navbars</Link>
                </li>
                <li>
                  <Link to="snackbar">Snackbar</Link>
                </li>
                <li>
                  <Link to="textUtils">Text Utilities</Link>
                </li>
            </ul>
        </div>
     </>
  );
};

export default Sidebar;
