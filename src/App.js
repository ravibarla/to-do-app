import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import { db } from "./firebase_config";
import TodoListItem from "./Todo";

function App() {
  //hooks to save single todo
  const [todoInput, setTodoInput] = useState("");
  //hooks to save multilple todo
  const [todos, setTodos] = useState([]);
  //function to add to database
  //useeffect used whenever vaue changes than useEfect will be called
  useEffect(() => {
    getTodos();
  }, []); //blank to run on first lounch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>My to do app</h1>
        <form>
          <TextField
            id="standard-basic"
            label="write a to do"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            style={{ width: "90vw", maxWidth: "500px" }}
          />
          <Button
            variant="contained"
            onClick={addTodo}
            type="submit"
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
