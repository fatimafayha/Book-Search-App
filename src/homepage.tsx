import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Typography } from "@mui/material";
import { searchBooks } from "./api/bookApi";
import SearchBar from "./components/searchBar";
import GenreFilter from "./components/genre";
import BookList from "./components/bookList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const { data: books = [], refetch, isFetching, error } = useQuery({
    queryKey: ["books", query, genre],
    queryFn: () => searchBooks(query, genre),
  });

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Book Search
      </Typography>
      <SearchBar onSearch={(q) => { setQuery(q); refetch(); }} />
      <GenreFilter onSelectGenre={(g) => { setGenre(g); refetch(); }} />
      {isFetching && <Typography>Loading books</Typography>}
      {error && <Typography color="error">Error fetching books</Typography>}
      <BookList books={books} />
    </Container>
  );
};

export default Home;
