import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './MovieCard.css'; 

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Link to={`/movie/${encodeURIComponent(title)}`} className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-description">{description}</p>
      <div className="movie-rating">
        {[...Array(6)].map((_, index) => (
          <FaStar key={index} color={index < Math.round(rating) ? '#ffd700' : '#e4e5e9'} />
        ))}
      </div>
    </Link>
  );
};

export default MovieCard;
