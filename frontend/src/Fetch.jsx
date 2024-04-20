import { useEffect } from "react";
const Fetch = async (url, setData, setLoading, setError, navigateCallBack) => {
  setLoading(true);
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    // console.log(JSON.parse(localStorage.getItem("token")));
    const info = await response.json();
    if (response.ok) {
      setLoading(false);
      setData(info.data);
    } else {
      setLoading(false);
      setError(true);
      console.log(info);
      if (info.status === 400) navigateCallBack("/login");
    }
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};
export default Fetch;
