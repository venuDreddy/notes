const VerifyUser = async (url, username, password, navigateCallBack) => {
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
        localStorage.setItem("token", JSON.stringify(fetchResult.data.token));
        navigateCallBack("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export default VerifyUser;
