import React, { useState } from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonGroup } from "@mui/material";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Alert } from "@mui/material";

const Form = (props) => {
  const [todo, setTodo] = useState(" ");
  const [alert, setAlert] = useState(false);

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (todo.trim().length === 0) {
      setAlert(true);
      return;
    }
    setAlert(false);
    props.onTodoItem(todo);
    console.log(todo);
    setTodo("");
  };

  const DeleteAllHandler = (event) => {
    event.preventDefault();
    const deletedArr = [];
    localStorage.clear();
    props.onDeleteAllHandler(deletedArr);
  };
  return (
    <div>
      <Container maxWidth="md">
        {alert == true && (
          <Alert
            onClose={() => {
              setAlert(false);
            }}
            severity="error"
            style={{ marginTop: "5%" }}
          >
            Enter a valid todo
          </Alert>
        )}
        <h1 style={{ textAlign: "center", marginBottom: "8%" }}>
          My Todo List
        </h1>
        <Grid
          container
          spacing={2}
          justify="center"
          style={{ marginBottom: "7%" }}
        >
          <Grid
            item
            xs={10}
            sm={10}
            md={7}
            style={{ margin: "auto", justifyContent: "center" }}
          >
            <TextField
              placeholder="Enter Your Todo"
              variant="standard"
              name="todo"
              onChange={inputHandler}
              value={todo}
              fullWidth
              id="fullWidth"
            />
          </Grid>
          <Grid
            item
            xs={8}
            sm={5}
            md={5}
            style={{ margin: "auto", justifyContent: "center" }}
          >
            <ButtonGroup>
              <Button
                onClick={formHandler}
                variant="contained"
                color="success"
                endIcon={<SaveIcon />}
              >
                Add Todo
              </Button>

              <Button
                onClick={DeleteAllHandler}
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
              >
                Discard All Todo
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Form;