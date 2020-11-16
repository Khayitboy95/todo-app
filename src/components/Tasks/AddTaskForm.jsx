import axios from 'axios';
import React, { useState } from 'react';
import addSvg from './../../assets/img/add.svg';

const AddTaskForm = (props) => {
    const [visibleForm, setVisibleForm] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm);
        setInputValue('');
    }

    const addTask = () => {  
        const obj = {
            listId: props.list.id,
            text: inputValue,
            completed: false
        }
        setIsLoading(true);
        axios.post('http://localhost:3003/tasks', obj).then((response) => {  
            props.onAddTask(props.list.id, response.data);
            toggleFormVisible();
        }).catch(() => {
            alert('Ошибка при добавлении задачи');
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className="tasks__form">
            {!visibleForm && <div className="tasks__form-new" onClick={toggleFormVisible}>
                <img src={addSvg} alt="add icon"/>
                <span>Новая задача</span>
            </div>}
            {visibleForm && <div className="tasks__form-block">
                <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} className="field" type="text" placeholder="Текст задачи" />
                <button className="button" disabled={isLoading} onClick={addTask}>{isLoading ? 'Добавление...' : 'Добавить задачу'}</button>
                <button className="button button--grey" onClick={toggleFormVisible}>Отмена</button>
            </div>}
        </div>
    )
}

export default AddTaskForm;