import React from "react";
import './BookSpace.css';
import { Link } from 'react-router-dom';

// Props is always an object!
// Props are used to configure your components
function BookSpace(props) {
	const { title, image, author, genre, id } = props;
	return (
<article className="BookSpace">
  <h1>
    <Link
      className="BookSpace-title"
      to={`/details/${id}`}
      aria-label={`${title} details`}
    >
      {title}
    </Link>
  </h1>
  <Link to={`/details/${id}`} aria-label={`${title} image`}>
    <img
      src={`${process.env.PUBLIC_URL}/images/${image}`}
      width="300"
      height="400"
      alt={`${title} cover`}
    />
  </Link>
  <div className="BookSpace-info">
    <div className="author" aria-label={`Author: ${author}`}>
      {author}
    </div>
    <div className="genre" aria-label={`Genre: ${genre}`}>
      {genre}
    </div>
  </div>
</article>

	)
}

export default BookSpace;