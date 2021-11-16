import React from 'react';
import style from '../css_modules/todoitem.module.css';

export default function TodoItem(props) {

    return (
        <div className={props.todo.title.slice(-1) === 'e' ? `${style.colorBackground}` : ''}>
            <div key={props.todo.id}>
                <div>{props.todo.title}</div>
            </div>
        </div>
    )
}