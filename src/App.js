import './App.css';
import { AddToDoList } from './Components/AddToDoList';
import { Header } from './Components/Header';
import { ToDoList } from './Components/ToDoList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header></Header>
      <AddToDoList></AddToDoList>
      <ToDoList/>
      </GlobalProvider>
    </div>
  );
}

export default App;
