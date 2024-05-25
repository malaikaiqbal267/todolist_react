import React from 'react';

const todo = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <div className='container'
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
        <div>
           <button className='btn1'onClick={() =>completeTodo(index)}>✅</button>
           <button className='btn1' onClick={() =>removeTodo(index)}>❎</button>
        </div>
      
    </div>
  );
};

export default todo;
