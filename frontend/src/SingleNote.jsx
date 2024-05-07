import PutNotes from "./PutNotes";
import DeleteNotes from "./DeleteNotes";
import "./App.css";
import { useState, useEffect } from "react";

const SingleNote = ({ id, data, setData, setError, setLoading }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [curr, setCurr] = useState(null);

  useEffect(() => {
    const currentNote = data.find((note) => note.id === id);
    setCurr(currentNote);
    if (currentNote) {
      setTitleValue(currentNote.title);
      setContentValue(currentNote.content);
    }
  }, [id, data]);

  let clickedButton = "";

  if (curr) {
    return (
      <form
        className='notes-display'
        onSubmit={(e) => {
          e.preventDefault();
          if (clickedButton === "save") {
            PutNotes(id, titleValue, contentValue, data, setData);
          } else {
            DeleteNotes(id, data, setData, setError, setLoading);
          }
        }}
      >
        <div className='save-delete-container'>
          <input
            type='submit'
            onClick={() => (clickedButton = "save")}
            value='Save'
            name='save'
            className='btn'
          />
          <input
            type='submit'
            onClick={() => (clickedButton = "delete")}
            value='Delete'
            name='delete'
            className='btn'
          />
        </div>
        <div>
          <input
            type='text'
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className={"input-field title-input"}
            placeholder='Enter Title'
          />
        </div>
        <div>
          <textarea
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            rows='100'
            cols='100'
            className='textarea'
            placeholder='Enter content'
          />
        </div>
      </form>
    );
  }
};

export default SingleNote;
