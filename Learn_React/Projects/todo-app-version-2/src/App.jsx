import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <div className="items">
        <AddTodo></AddTodo>
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
