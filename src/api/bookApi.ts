import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const searchBooks = async (query: string, genre?: string) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: { query, genre },
  });
  return response.data;
};
