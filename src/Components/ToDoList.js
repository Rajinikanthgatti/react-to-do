import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { List } from './List'

export const ToDoList = () => {
    const {todos} = useContext(GlobalContext)
    return (
        <div className="list-con">
            <div className="title">List of ToDo items.</div>
            <div className="lists">
                <ul className="list">
                {todos.length <1 ? <div className="no-trans">No To Do Items to show.</div> : todos.map( todo => (
                    <List key = {todo.id} todo={todo}></List>
                ) )}
                </ul>
            </div>
        </div>
    )
}
