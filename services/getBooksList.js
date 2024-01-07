const getBooksList = async () => {
  const response = await fetch(
    "https://41e043d9c98f4dfd98822634f8d9f4ba.api.mockbin.io/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

export default getBooksList;
