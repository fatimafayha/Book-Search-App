import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const GOOGLE_BOOKS_API = process.env.GOOGLE_BOOKS_API;
