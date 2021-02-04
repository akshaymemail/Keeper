import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    name === "title" ? setInputTitle(value) : setInputContent(value);
  }

  return (
    <div>
      <form
        className="create-note"
        action="/"
        method="POST"
        onSubmit={(e) => {
          props.onChecked([inputTitle, inputContent]);
          setInputTitle("");
          setInputContent("");
          e.preventDefault();
        }}
      >
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            value={inputTitle}
            placeholder="Title"
            required
            autoComplete='off'
          />
        )}

        <textarea
          onFocus = {() => {
            setExpanded(true);
          }}
          onChange={handleChange}
          name="content"
          value={inputContent}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          required
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
