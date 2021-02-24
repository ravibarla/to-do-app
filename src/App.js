import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import { db } from "./firebase_config";

function App() {
  const [todoInput, setTodoInput] = useState("");
  //function to add to database
  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>ravi barla to do app</h1>
        <form>
          <TextField
            id="standard-basic"
            label="write a to do"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            style={{ maxWidth: "300px", width: "90vw" }}
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
      </div>
    </div>
  );
}

export default App;
