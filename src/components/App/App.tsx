import { useState } from 'react'
import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster, toast } from 'react-hot-toast'
import { fetchMovies } from '../../services/movieService'
import type { Movie } from '../../types/movie'
import MovieGrid from '../MovieGrid/MovieGrid'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {

    setMovies([]);
    setError(null);
    setLoading(true);

    try {
      const fetchedMovies = await fetchMovies(query);

      if (fetchedMovies.length === 0) {
        toast.error('No movies found for your request.');
      }

      setMovies(fetchedMovies);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMovie = (movie: Movie) => {

  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={handleSelectMovie} />}
      <Toaster />
    </div>
  );
}

export default App
