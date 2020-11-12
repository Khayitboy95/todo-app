import React, { useState } from 'react';
import Badge from '../Badge/Badge';
import List from '../List/List';

import closeBtn from './../../assets/img/close.svg'

import './AddList.scss';

const AddList = (props) => {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(props.colors[0].id);
    
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
                <img src={closeBtn} onClick={() => {setVisiblePopup(false)}} alt="close_btn" className="add-list__popup-close-btn"/>
                <input className="field" type="text" placeholder="Название списка" />
                <div className="add-list__popup-colors">
                    {
                        props.colors.map((color) => (
                            <Badge onClick={() => selectColor(color.id)} key={color.id} color={color} className={selectedColor === color.id && 'active'} />
                        ))
                    }
                </div>
                <button className="button">Добавить</button>
            </div>
            }
        </div>
    )
}
export default AddList;