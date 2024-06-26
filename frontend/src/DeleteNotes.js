import Fetch from "./Fetch";
const DeleteNotes = async (id, NotesData, setData, setError, setLoading) => {
  const baseUrl = import.meta.env.VITE_URL;
  const url = baseUrl + "api/notes/" + id;
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
    let updatedData = NotesData.filter((singleData) => {
      if (singleData.id != id) return singleData;
    });
    console.log(updatedData);
    updatedData.sort((x, y) => {
      return y.id - x.id;
    });
    setData(updatedData);
  } else {
    console.log("there was a error");
  }
};
export default DeleteNotes;
