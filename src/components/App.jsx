import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([
    {
      title: "React",
      content: "React is simply awesome!"
    },
    {
      title: "Node.js",
      content: "Node.js is simply creazy!"
    }
  ]);

  function addNote(newNote) {
    const [title, content] = newNote;

    setNote((preValue) => {
      return [
        ...preValue,
        {
          title: title,
          content: content
        }
      ];
    });
  }

  function deleteItem(id){
    setNote(preValue => {
      return preValue.filter((item, index) => {
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onChecked={addNote} />
      <div className="notes">
      {notes.map((note, index) => {
        return <Note onDelete = {deleteItem} id = {index} key = {index} title= {note.title} content= {note.content} />
      })}
      </div>

      <Footer />
    </div>
  );
}

export default App;