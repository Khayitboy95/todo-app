import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import editSvg from './../../assets/img/edit.svg';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

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
          <Link to={`/lists/${props.list.id}`}>
          <h2 style={{color: props.list.color.hex}} className="tasks__title" >{props.list.name} <img onClick={editTitle} src={editSvg} alt="edit icon"/></h2>
          </Link>
          <div className="tasks__items">
              {!props.withoutEmpty && props.list.tasks && !props.list.tasks.length && <h2>Задачи отсутствуют</h2>}
              {props.list.tasks && props.list.tasks.map(task => (
                  <Task list={props.list} key={task.id} {...task} onEdit={props.onEditTask} onRemove={props.onRemoveTask} />
               ) )}
               <AddTaskForm key={props.list.id} list={props.list} onAddTask={props.onAddTask} />
          </div>
        </div>
    )
}
export default Tasks;