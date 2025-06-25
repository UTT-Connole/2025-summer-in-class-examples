'use client';

import useMovies from '@/hooks/useMovies';
import useMovieFormData from '@/hooks/useMovieFormData';
import MovieTableHeader from '../ui/MovieTableHeader';
import MovieTableData from '../ui/MovieTableData';
import FormInput from '../ui/FormInput';

export default function MoviesPage() {
  const {movies, moviesLoading, movieError} = useMovies();
  const {formData, handleInputChange, handleSubmit, submitError} = useMovieFormData();

// setMovies([...movies, newMovie]);

  if (moviesLoading) return <div className="text-center p-8">Loading movies...</div>;
  if (movieError) return <div className="text-center p-8 text-red-500">Error: fetching movies</div>;
  if (submitError) return <div className="text-center p-8 text-red-500">Error: submitting</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Movies Collection</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-black">Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              value={formData.title}
              onChange={handleInputChange}
              title="Title"
            />
            <FormInput
              value={formData.director}
              onChange={handleInputChange}
              title="Director"
            />
            <FormInput
              value={formData.year}
              onChange={handleInputChange}
              title="Year"
            />
            <FormInput
              value={formData.genre}
              onChange={handleInputChange}
              title="Genre"
            />
            
          </div>
          
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <MovieTableHeader>Title</MovieTableHeader>
              <MovieTableHeader>Director</MovieTableHeader>
              <MovieTableHeader>Year</MovieTableHeader>
              <MovieTableHeader>Genre</MovieTableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <tr key={movie.id}>
                  <MovieTableData>{movie.title}</MovieTableData>
                  <MovieTableData>{movie.director}</MovieTableData>
                  <MovieTableData>{movie.year}</MovieTableData>
                  <MovieTableData>{movie.genre}</MovieTableData>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No movies found. Add one using the form above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
