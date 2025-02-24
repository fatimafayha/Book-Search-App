import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const genres = ["Fiction", "Non-Fiction"];

interface GenreFilterProps {
  onSelectGenre: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ onSelectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <ToggleButtonGroup
      value={selectedGenre}
      exclusive
      onChange={(_, newGenre) => {
        if (newGenre) {
          setSelectedGenre(newGenre);
          onSelectGenre(newGenre);
        }
      }}
    >
      {genres.map((genre) => (
        <ToggleButton key={genre} value={genre}>
          {genre}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default GenreFilter;
