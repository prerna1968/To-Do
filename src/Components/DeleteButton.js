import React, { useState } from "react";
import { useParams } from "react-router";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (props) => {
  const DeleteHandler = (e) => {
    e.preventDefault();
    const newarr = [...props.arrs].filter((arr) =>arr.id != props.val.id);
    // localStorage.removeItem(props.val.id);
    props.onDeleteArr(newarr);
  };

  return (
    <div>
      <IconButton aria-label="delete" style={{ color : 'black' }} size="large">
        <DeleteIcon onClick={DeleteHandler} />
      </IconButton>
    </div>
  );
};

export default DeleteButton;