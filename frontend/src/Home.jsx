import { useEffect, useState } from "react";
import Fetch from "./Fetch";
import SingleNote from "./SingleNote";
import PostNotes from "./PostNotes";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import "./App.css";
const Home = () => {
  const baseUrl = import.meta.env.URL;
  const url = baseUrl + "api/notes";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noteId, setNoteId] = useState(-1);
  const navigate = useNavigate();
  useEffect(() => {
    Fetch(url, setData, setLoading, setError, (path) => {
      navigate(path);
    });
  }, []);
  if (loading) {
    return (
      <div className='center'>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className='center'>
        <h1>There was an error fetching data...</h1>
      </div>
    );
  }
  console.log(noteId);
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        background: "#dce5e9",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "20vw" }}>
          <button
            className='add-btn'
            onClick={() => {
              PostNotes(data, setData, setError, setLoading, setNoteId);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              localStorage.setItem("token", null);
              navigate("/login");
            }}
            className='logout-btn'
          >
            logout
          </button>
        </div>
        <div className='left-panel'>
          <LeftPanel data={data} setNoteId={setNoteId} noteId={noteId} />
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          position: "relative",
        }}
      >
        <SingleNote
          id={noteId}
          data={data}
          setData={setData}
          setError={setError}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};
export default Home;
