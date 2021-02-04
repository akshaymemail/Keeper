import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
function handleClick(){
  return props.onDelete(props.id)
}
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in = {true}>
      <IconButton onClick = {handleClick}>
      <DeleteIcon />
      </IconButton>
      </Zoom>
    </div>
  );
}

export default Note;
