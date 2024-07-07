import React from 'react';

const Popup = ({ movie, onClose, genreMap }) => {
  if (!movie) return null;

  const releaseDate = new Date(movie.release_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const genres = movie.genre_ids.map(id => genreMap[id] || 'Unknown').join(', ');

  return (
    <div className="popup show" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
        <h2>{movie.title}</h2>
        <p>{movie.overview ? movie.overview : 'No additional details available.'}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Genres: {genres}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Popularity: {movie.popularity}</p>
      </div>
    </div>
  );
};

export default Popup;