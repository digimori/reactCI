import React from 'react';
import css from './css/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.Sidebar}>
        <ul>
            <li>My Photos</li>
            <li>My Illustrations</li>
            <li>My Paintings</li>
        </ul>
    </div>
  )
}

export default Sidebar