"use server";
const getGlobalBooksList = async () => {
  const response = await fetch(
    "https://809d943e48f84a3792f00683a8783014.api.mockbin.io/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

export default getGlobalBooksList;
