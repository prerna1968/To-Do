import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";
import { grey } from '@mui/material/colors';

const UpdateButton = (props) => {
  return (
    <Link to={`/update/${props.val.id}`}>
      <IconButton aria-label="create" style={{ color : 'black' }} size="large">
        <CreateIcon />
      </IconButton>
    </Link>
  );
};

export default UpdateButton;