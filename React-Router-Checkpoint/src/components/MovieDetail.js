import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css'; 

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const movie = movies.find((movie) => movie.title === decodedTitle);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
     
      <p>{movie.description}</p>
      <div className="movie-trailer">
        {movie.trailerURL && (
          <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <Link to="/" className="back-home-button">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
