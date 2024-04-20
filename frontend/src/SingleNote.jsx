import PutNotes from "./PutNotes";
import DeleteNotes from "./DeleteNotes";
import "./App.css";
const SingleNote = ({
  username,
  id,
  data,
  title,
  content,
  setData,
  setError,
  setLoading,
}) => {
  console.log(id);
  const curr = data.find((note) => note.id === id);
  // console.log(curr);
  let clickedButton = "";
  return (
    <form
      className='notes-display'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.content.value);
        if (clickedButton === "save")
          PutNotes(
            id,
            e.target.title.value,
            e.target.content.value,
            data,
            setData
          );
        else DeleteNotes(id, data, setData, setError, setLoading);
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
        <label htmlFor=''>Title: </label>
        <input
          type='text'
          defaultValue={curr ? curr.title : ""}
          name='title'
          className={"input-field title-input"}
        />
      </div>
      <label htmlFor=''>Content: </label>
      <textarea
        defaultValue={curr ? curr.content : ""}
        rows='100'
        cols='100'
        name='content'
        className='textarea'
      />
    </form>
  );
};
export default SingleNote;
