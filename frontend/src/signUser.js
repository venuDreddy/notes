const signUser = async (
  url,
  username,
  password,
  email,
  navigateCallBack,
  setUsernameError,
  setEmailError
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
        email: email,
      }),
    });
    if (response.ok) {
      const fetchResult = await response.json();
      if (response.status != 400) {
        navigateCallBack("/login");
      }
    } else {
      const fetchResult = await response.json();
      console.log(fetchResult);
      if (fetchResult.error.length < 25) {
        setUsernameError("Username is already taken");
        setEmailError("");
      } else {
        setUsernameError();
        setEmailError("An account already exists with this email");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export default signUser;
