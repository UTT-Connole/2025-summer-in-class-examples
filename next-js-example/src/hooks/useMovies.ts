import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string;
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    refreshMovies();
  }, []);

  const refreshMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return { movies, refreshMovies };
};

export default useMovies;
