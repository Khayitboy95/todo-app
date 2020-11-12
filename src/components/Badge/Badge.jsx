import React from 'react';

import './Badge.scss'

const Badge = (props) => {
    return (
        <i onClick={props.onClick} className={`badge badge--${props.color.name} ${props.className}`}></i>
    )
}

export default Badge;