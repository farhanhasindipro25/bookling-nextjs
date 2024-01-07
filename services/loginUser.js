const loginUser = async (payload) => {
  try {
    const response = await fetch("https://assignment.ongshak.com/rest-auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      throw new Error(
        `Could not login! ${response.status || ""} ${response.statusText || ""}`
      );
    }
  } catch (error) {
    throw new Error(`Could not login! ${error.message || ""}`);
  }
};

export default loginUser;
