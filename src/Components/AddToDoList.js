import React, {useContext, useState} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddToDoList = () => {

    const [text, setText] = useState('')
    const {addToDo} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 10000000),
            text
        }
        if((text.trim().length !== 0)){
            addToDo(newTodo);
            setText('');
        } else{
            toast('Please provide a valid name');
        }
    }

    return (
        <div className="add-todo-container">
            <form onSubmit={onSubmit}>
            <label className="title" htmlFor="text">Add new Todo</label>
            <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Title for the to-do..."></input>
            <button className="add-btn">+</button>
            </form>
        </div>
    )
}
