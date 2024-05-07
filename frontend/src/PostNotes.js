import Fetch from "./Fetch";
const PostNotes = async (data, setData, setError, setLoading, setNoteId) => {
  const baseUrl = import.meta.env.VITE_URL;
  const url = baseUrl + "api/notes";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    body: JSON.stringify({
      title: "",
      content: "",
    }),
  });
  console.log(response);
  console.log(response.ok);
  if (response.ok) {
    const newNote = await response.json();
    const obj = newNote.data.message;
    console.log(obj);
    let newData = [...data, obj];
    newData.sort((x, y) => {
      return y.id - x.id;
    });
    setNoteId(obj.id);
    setData(newData);
  }
};
export default PostNotes;
