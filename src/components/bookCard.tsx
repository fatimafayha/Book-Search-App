import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BookCard = ({ book }: { book: any }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={book.volumeInfo.imageLinks?.thumbnail }
      alt={book.volumeInfo.title}
    />
    <CardContent>
      <Typography variant="h6">{book.volumeInfo.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {book.volumeInfo.authors?.join(", ")}
      </Typography>
    </CardContent>
  </Card>
);

export default BookCard;
