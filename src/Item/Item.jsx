import React from 'react';
import './Item.css';

export const Item = ({ id, crossItem, checked, value, date }) => {
  return (
    <li className='ListItem' key={id}>
      <div className='TitleCont'>
        <input
          onChange={crossItem}
          checked={checked}
          className='CheckBox'
          type='checkbox'
        />
        <p className={checked ? 'Strike ToDoText' : 'ToDoText'}>{value}</p>
      </div>
      <span className='DateText'>{date}</span>
    </li>
  );
};
