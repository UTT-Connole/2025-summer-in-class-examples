interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  genre?: string;
}

import { useState, useEffect } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setSubmitError(true);

      }
      setLoading(false);
    };

    fetchMovies();
  }, []);
  return {movies, setMovies, submitError, moviesLoading:loading}

}

export default useMovies;