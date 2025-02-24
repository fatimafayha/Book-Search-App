import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => onSearch(query)}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
