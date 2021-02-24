import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>
      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "undone"}
      </Button>
      <Button onClick={deleteTodo}>x</Button>
    </div>
  );
}
