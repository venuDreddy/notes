const PutNotes = async (id, title, content) => {
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
    const data = await response.json();
    console.log(data);
  }
};
export default PutNotes;
