import React from "react";
import './BookSpace.css';
import { Link } from 'react-router-dom';

// Props is always an object!
// Props are used to configure your components
function BookSpace(props) {
	const { title, image, author, genre, id } = props;
	return (
		<div className="BookSpace">
			<h1>
				<Link 
					className="BookSpace-title"
					to={`/details/${id}`}>
					{title}
				</Link>
			</h1>
			<Link to={`/details/${id}`}>
				<img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="400" alt="Hello" />
			</Link>
			<div className="BookSpace-info">
				<div className="author">{author}</div>
				<div className="genre">{genre}</div>
			</div>
		</div>
	)
}

export default BookSpace;