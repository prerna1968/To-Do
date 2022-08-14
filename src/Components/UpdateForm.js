import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Router, Link, Switch } from "react-router-dom";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import UpdateIcon from "@mui/icons-material/Update";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Alert } from "@mui/material";

const UpdateForm = (props) => {
  //extracting id from params
  const todoId = useParams();

  let todoName = "";

  //finding the todovalue for params id
  props.oldVals.forEach((oldVal) => {
    if (oldVal.id === todoId.todoId) {
      todoName = oldVal.name;
    }
  });

  const [updateTodo, setUpdateTodo] = useState(todoName);
  const [updateAlert, setUpdateAlert] = useState(false);

  const inputUpdateHandler = (event) => {
    setUpdateTodo(event.target.value);

    //updating name of todo in array
    props.oldVals.forEach((oldVal) => {
      if (oldVal.id === todoId.todoId) {
        oldVal.name = event.target.value;
      }
    });

    console.log(props.oldVals);
    if (updateTodo.trim().length === 0) {
      setUpdateAlert(true);
      return;
    }

    setUpdateAlert(false);
  };

  const UpdateHandler = () => {
    setUpdateTodo("");
  };

  localStorage.setItem("todoList", JSON.stringify(props.oldVals));

  return (
    <Container maxWidth="md">
      {updateAlert == true && (
        <Alert
          onClose={() => {
            setUpdateAlert(false);
          }}
          severity="error"
          style={{ marginTop: "5%" }}
        >
          Enter a valid todo
        </Alert>
      )}
      <h1 style={{ textAlign: "center", marginBottom: "8%" }}>
        Update Your Todo
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={8} md={10} style={{ margin: "auto" }}>
          <TextField
            variant="standard"
            onChange={inputUpdateHandler}
            value={updateTodo}
            name="todo"
            fullWidth
            id="fullWidth"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ margin: "auto" }}>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <Button
              variant="contained"
              color="error"
              size="medium"
              onClick={UpdateHandler}
              endIcon={<SaveIcon />}
              type="submit"
            >
              Update
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpdateForm;