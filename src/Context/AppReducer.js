export default (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos: [action.payload, ...state.todos],
            }
        case 'DELETE_TO':
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}