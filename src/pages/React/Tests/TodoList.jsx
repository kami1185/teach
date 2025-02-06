import React from 'react';
import { createRoot } from 'react-dom/client';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

export const TodoList = ({ items, onListClick, onItemClick }) => {
  const handleItemClick = (item, event) => {
    // Write your code here
    console.log(item.done, event)
    if(!item.done){
        onItemClick(item, event)
    }
  };



  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>
  );
}


