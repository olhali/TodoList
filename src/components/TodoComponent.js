import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../features/todoSlice';
import TodoItem from './TodoItem';

export default function TodoComponent() {

    const {list} = useSelector(state => state.todoList);
    const dispatch = useDispatch();

    const URL = 'http://jsonplaceholder.typicode.com/todos';

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then(data => {
            data.sort(sortArrayByTitle);
            dispatch(setPosts(data))  
        })
          
    }, []);

    const sortArrayByTitle = (a,b) => {
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
    };

    const todoItems = list
        .filter((todo) => todo.title[0] == 's')
        .map((todo) =>
            <TodoItem
                todo={todo}
                key={todo.id}
            />
        );

    return (
        <div>
            {todoItems}
        </div>
    )
}