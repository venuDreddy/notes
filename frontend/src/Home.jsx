import { useEffect, useState } from "react";
import Fetch from "./Fetch";
import SingleNote from "./SingleNote";
import PostNotes from "./PostNotes";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
const Home = () => {
  const url = "http://localhost:5000/api/notes";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noteId, setNoteId] = useState(-1);
  const [render, setRender] = useState(false);
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
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "20vw" }}>
          <button
            onClick={() => {
              PostNotes(setData, setError, setLoading);
            }}
          >
            ADD
          </button>
          <button
            onClick={() => {
              localStorage.setItem("token", null);
              navigate("/login");
            }}
          >
            logout
          </button>
        </div>
        <div>
          <LeftPanel data={data} setNoteId={setNoteId} />
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          borderLeft: "2px solid black",
          margin: "10px",
        }}
      >
        <SingleNote
          id={noteId}
          render={render}
          setRender={setRender}
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
