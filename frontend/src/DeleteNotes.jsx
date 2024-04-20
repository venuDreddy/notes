import Fetch from "./Fetch";
const DeleteNotes = async (id, NotesData, setData, setError, setLoading) => {
  const url = "http://localhost:5000/api/notes/" + id;
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  const data = await response.json();
  if (response.ok) {
    const updatedData = NotesData.filter((singleData) => {
      if (singleData.id != id) return singleData;
    });
    console.log(updatedData);
    setData(updatedData);
  } else {
    console.log("there was a error");
  }
};
export default DeleteNotes;
