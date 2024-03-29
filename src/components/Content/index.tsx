import { useMovies } from '../../MoviesContext';
import { MovieCard } from './MovieCard';
import { memo } from 'react';
import '../../styles/content.scss';


function ContentComponent() {
  const { selectedGenre, movies } = useMovies();

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent);

