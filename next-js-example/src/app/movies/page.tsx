"use client";

import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    release_year: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          release_year: parseInt(formData.release_year),
        }),
      });

      if (response.ok) {
        setFormData({ title: "", release_year: "", genre: "" });
        fetchMovies(); // Refresh the list
      }
    } catch (error) {
      console.error("Error adding movie:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>

      {/* Add Movie Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Release Year
            </label>
            <input
              type="number"
              name="release_year"
              value={formData.release_year}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Movie"}
            </button>
          </div>
        </form>
      </div>

      {/* Movies List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Movies List</h2>
        {movies.length === 0 ? (
          <p className="text-gray-500">No movies found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
              >
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Release Year: {movie.release_year}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Genre: {movie.genre}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
