import React from 'react';
import './List.scss';

import removeSvg from './../../assets/img/remove.svg';

const List = (props) => {
    const removeList = (item) => {
        if(window.confirm('Вы действительно хотите удалить список?')){
          props.onRemove(item);
        }
    }

    return(
        <ul onClick={props.onClick} className="list">
            {
                props.items.map((item, index) => (
                    <li key={index} className={item.active ? 'active' : ''}>
                        <i>{item.icon ? item.icon : <i className={`badge badge--${item.color.name}`}></i>}</i>
                        <span>{item.name}</span>
                        {props.isRemovable && <img onClick={() => {removeList(item)}} className="list__remove-icon" src={removeSvg} alt="remove icon"/>}
                    </li> 
                ))
            }
        </ul>
    )
}
export default List;