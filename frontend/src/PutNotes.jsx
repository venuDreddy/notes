const PutNotes = async (id, title, content, data, setData) => {
  const url = "http://localhost:5000/api/notes/" + id;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      content: content,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  if (response.status == 200) {
    const result = await response.json();
    const curr = data.find((note) => {
      note.id === id;
    });
    const newData = data.filter((note) => {
      note.id !== id;
    });
    const updatedCurr = { ...curr, title: `${tile}`, content: `${content}` };
    setRender([...newData, updatedCurr]);
  }
};
export default PutNotes;
