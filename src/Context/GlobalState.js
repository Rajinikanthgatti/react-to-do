import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

const initialState = {
    todos: []
}

//CreateContext
export const GlobalContext = createContext(initialState);

//CreateProvider
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //functions
    function addToDo(todos) {
        dispatch({
            type: "ADD_TODO",
            payload: todos,
        })
    }

    function deleteTodo(id) {
        dispatch({
            type: "DELETE_TO",
            payload: id,
        })        
    }


    return(<GlobalContext.Provider value={{
        todos: state.todos,
        addToDo,
        deleteTodo
    }}>
        {children}
    </GlobalContext.Provider>)
}