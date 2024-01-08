"use server";
const loginUser = async (username, password) => {
  const response = await fetch(
    "https://assignment.ongshak.com/rest-auth/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const userData = await response.json();
  return userData;
};

export default loginUser;
