import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const List = ({todo}) => {

    const {deleteTodo} = useContext(GlobalContext)

    const onClick = (e) => {
        e.preventDefault();
        deleteTodo(todo.id);
    }

    return (
        <li>{todo.text} <button onClick={onClick} className="remove-btn">x</button> </li>
    )
}
