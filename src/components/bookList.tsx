import { Grid } from "@mui/material";
import BookCard from "./bookCard";

const BookList = ({ books }: { books: any[] }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item xs={12} sm={6} md={4} key={book.id}>
        <BookCard book={book} />
      </Grid>
    ))}
  </Grid>
);

export default BookList;
