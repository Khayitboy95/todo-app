import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Badge from '../Badge/Badge';
import List from '../List/List';

import closeBtn from './../../assets/img/close.svg'

import './AddList.scss';

const AddList = (props) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(Array.isArray(props.colors)){
            selectColor(props.colors[0].id);
        }
    }, [props.colors]);

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(props.colors[0].id);
    }

    const addList = () => {
        if(!inputValue) {
            alert('Введите название списка');
            return;
        }
        setIsLoading(true);
        axios.post('http://localhost:3003/lists',{name: inputValue, colorid:selectedColor}).then(response => {
            const color = props.colors.find(color => color.id === selectedColor).name;
            const listObj = {...response.data, color: { name:color}};
            props.onAdd(listObj);   
            onClose();
            setIsLoading(false);
        });
    }
    return (
        <div className="add-list">
            <List onClick={() => {setVisiblePopup(true)}} items={[
                {
                icon: (
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ),
                name:'Добавить список'
                }
            ]} />
            {visiblePopup &&
            <div className="add-list__popup">
                <img src={closeBtn} onClick={onClose} alt="close_btn" className="add-list__popup-close-btn"/>
                <input value={inputValue} onChange={e=>{setInputValue(e.target.value)}} className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">
                    {
                        props.colors.map((color) => (
                            <Badge onClick={() => selectColor(color.id)} key={color.id} color={color} className={selectedColor === color.id && 'active'} />
                        ))
                    }
                </div>
                <button onClick={addList} className="button">
                    {isLoading ? 'Добавление...' : 'Добавить'}
                </button>
            </div>
            }
        </div>
    )
}
export default AddList;