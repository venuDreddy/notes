const VerifyUser = async (
  url,
  username,
  password,
  navigateCallBack,
  setIsValid
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (response.ok) {
      const fetchResult = await response.json();
      console.log(response);
      if (response.status != 400) {
        setIsValid(true);
        localStorage.setItem("token", JSON.stringify(fetchResult.data.token));
        navigateCallBack("/");
      }
    } else {
      setIsValid(false);
    }
  } catch (error) {
    console.log(error);
  }
};
export default VerifyUser;
