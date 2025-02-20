import express from "express";
import cors from "cors";
import { PORT } from "./config/dotenv";
import bookRoutes from "./routes/books"; 

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
