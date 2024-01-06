const getBooksList = async () => {
  const response = await fetch(
    "https://df0bb499a0aa4c60a20bd81e6d1471a6.api.mockbin.io/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

export default getBooksList;
