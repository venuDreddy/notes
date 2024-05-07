const PutNotes = async (id, title, content, data, setData) => {
  const baseUrl = import.meta.env.URL;
  const url = baseUrl + "api/notes/" + id;
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
  if (response.ok) {
    const result = await response.json();
    const curr = data.find((note) => note.id === id);
    const newData = data.filter((note) => {
      return note.id !== id;
    });
    const updatedCurr = { ...curr, title: `${title}`, content: `${content}` };
    console.log(curr);
    console.log(newData);
    let finalData = [...newData, updatedCurr];
    finalData.sort((x, y) => {
      return y.id - x.id;
    });
    console.log(finalData);
    setData(finalData);
  }
};
export default PutNotes;
