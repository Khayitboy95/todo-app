import axios from 'axios';
import React from 'react';
import editSvg from './../../assets/img/edit.svg';
import AddTaskForm from './AddTaskForm';

import './Tasks.scss';

const Tasks = (props) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название списка', props.list.name);
        if(newTitle) {
            props.onEditTitle(props.list.id, newTitle);
            axios.patch('http://localhost:3003/lists/' +props.list.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось обновить название списка');
            });
        }
    }

    return (
        <div className="tasks">
          <h2 style={{color: props.list.color.hex}} className="tasks__title" >{props.list.name} <img onClick={editTitle} src={editSvg} alt="edit icon"/></h2>
          <div className="tasks__items">
              {!props.withoutEmpty && !props.list.tasks.length && <h2>Задачи отсутствуют</h2>}
              {props.list.tasks.map(task => (
                  <div key={task.id} className="tasks__items-row">
                  <div className="checkbox">
                      <input id={`task-${task.id}`} type="checkbox"/>
                      <label htmlFor={`task-${task.id}`}>
                          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </label>
                  </div>
                  {<input type="text" readOnly value={task.text}  /> }
                </div>
               ) )}
               <AddTaskForm list={props.list} onAddTask={props.onAddTask} />
          </div>
        </div>
    )
}
export default Tasks;