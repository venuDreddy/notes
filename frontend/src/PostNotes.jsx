import Fetch from "./Fetch";
const PostNotes = async (setData, setError, setLoading) => {
  const url = "http://localhost:5000/api/notes";
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
  //   const data = await response.json();
  console.log(response);
  console.log(response.ok);
  if (response.ok) {
    Fetch(url, setData, setLoading, setError);
  }
};
export default PostNotes;
