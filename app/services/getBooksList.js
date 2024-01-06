const getBooksList = async () => {
    const response = await fetch("https://6599843aa20d3dc41cefda63.mockapi.io/api/v1/books");
  
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
  
    return response.json();
  };
  
  export default getBooksList;