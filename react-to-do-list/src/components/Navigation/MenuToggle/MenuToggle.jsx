import React from 'react';
import './MenuToggle.css';

export default function MenuToggle(props) {
    
    let className = 'MenuToggle';
    if (props.isOpen) {
        className = className + ' ' + 'open' + ' ' + 'fa' + ' ' + 'fa-times';
    } else {
        className = className + ' ' + 'fa' + ' ' + 'fa-bars';
    }

    return(
        <i className={className} onClick={props.onToggle}></i>
    );
}