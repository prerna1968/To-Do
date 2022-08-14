import CardUI from "./Components/CardUI";
import { useEffect, useState } from "react";
import Form from "./Components/Form";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UpdateForm from "./Components/UpdateForm";

const getLocalItems = () => {
  let list = localStorage.getItem('todoList');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('todoList'));
  }
  else {
    return [];
  }
};


function App() {
  const [todoList, setTodoList] = useState(getLocalItems());
  
  const todoPushValue = (todoVal) => {
    const makeId = Math.random().toString()
    setTodoList([...todoList, { name: todoVal, id: makeId }]);
  };

  const delfunc = (afterDelArr) => {
    setTodoList(afterDelArr);
  };

  const onDelete = (allDelete) => {
    setTodoList(allDelete);
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify( todoList ) );
  } , [todoList]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Form
            onTodoItem={todoPushValue}
            arr={todoList}
            onDeleteAllHandler={onDelete}
          ></Form>
          <CardUI values={todoList} onNewDelete={delfunc}></CardUI>
        </Route>
        <Route path="/update/:todoId" exact>
          <UpdateForm oldVals={todoList} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;