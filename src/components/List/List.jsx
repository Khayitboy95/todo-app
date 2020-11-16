import React from 'react';
import './List.scss';


import removeSvg from './../../assets/img/remove.svg';
import axios from 'axios';

const List = (props) => {
    const removeList = (item) => {
        if(window.confirm('Вы действительно хотите удалить список?')){
            axios.delete('http://localhost:3003/lists/'+item.id).then(() => {
                props.onRemove(item.id);
            });
        }
    }
    return(
        <ul onClick={props.onClick} className="list">
            {
                props.items.map((item, index) => (
                    <li onClick={props.onClickItem ? () => {props.onClickItem(item)} : null } key={index} className={item.active ? 'active' : props.activeItem && props.activeItem.id === item.id ? 'active' : ''}>
                        <i>{item.icon ? item.icon : <i className={`badge badge--${item.color.name}`}></i>}</i>
                        <span>
                            {item.name}
                            {item.tasks && ` (${item.tasks.length}) `}    
                        </span>
                        {props.isRemovable && <img onClick={() => {removeList(item)}} className="list__remove-icon" src={removeSvg} alt="remove icon"/>}
                    </li> 
                ))
            }
        </ul>
    )
}
export default List;