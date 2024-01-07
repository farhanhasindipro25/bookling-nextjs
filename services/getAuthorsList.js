"use server";
const getAuthorsList = async () => {
  const response = await fetch(
    "https://41231d0c5b864045b6e5589a149588a2.api.mockbin.io/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

export default getAuthorsList;
