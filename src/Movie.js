import React from 'react';

const Movie = ({ movie, onMovieClick, genreMap }) => {
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
  const releaseDate = new Date(movie.release_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const genres = movie.genre_ids.map(id => genreMap[id] || 'Unknown').join(', ');

  return (
    <div className="movie" onClick={() => onMovieClick(movie)}>
      {imageUrl && <img src={imageUrl} alt={movie.title} />}
      <h2>{movie.title}</h2>
      <p>{releaseDate}</p>
      <small>{genres}</small>
    </div>
  );
};

export default Movie;