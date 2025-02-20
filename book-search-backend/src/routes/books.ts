import express, { RequestHandler } from "express";
import axios from "axios";
import { GOOGLE_BOOKS_API } from "../config/dotenv";

const router = express.Router();

interface BookQueryParams {
  query: string;
  genre?: string;
}

const searchBooks: RequestHandler<object, { error?: string; items?: Record<string, any>[] }, object, BookQueryParams> = async (req, res) => {
  const { query, genre } = req.query;

  try {
    const response = await axios.get(GOOGLE_BOOKS_API as string, {
      params: {
        q: genre ? `${query}+subject:${genre}` : query,
        maxResults: 2,
      },
    });

    res.json(response.data.items || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

router.get("/search", searchBooks);

export default router;