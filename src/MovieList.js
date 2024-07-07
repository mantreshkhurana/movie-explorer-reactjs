import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onMovieClick, genreMap }) => (
  <div id="movie-list">
    {movies.map(movie => (
      <Movie key={movie.id} movie={movie} onMovieClick={onMovieClick} genreMap={genreMap} />
    ))}
  </div>
);

export default MovieList;