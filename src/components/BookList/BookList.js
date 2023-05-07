import React from 'react';
import { useState } from 'react';
import BookSpace from '../BookSpace/BookSpace';
import './BookList.css';
import data from '../../book-data.js';

function BookList() {
	const [query, setQuery] = useState('')
	const spaces = data.filter((obj) => {
		const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
		const inAuthor = obj.author.toLowerCase().includes(query.toLowerCase())
		const inGenre = obj.genre.toLowerCase().includes(query.toLowerCase())
		return inTitle || inAuthor || inGenre
	}).map((obj) => {
		const { id, title, author, desc, genre, published, images, website } = obj
		return (
			<div className="BookList">
				<BookSpace
					id={id}
					key={`${title}-${id}`}
					title={title}
					author={author}
					desc={desc}
					genre={genre}
					published={published}
					image={images[0]}
					website={website}
				/>
			</div>
		)
	})

	const numResults = spaces.length

	return (
		<section className="BookList" aria-label="Book list">
			<form>
				<label htmlFor="searchInput">Search by Title, Author, or Genre</label>
				<input
					id="searchInput"
					value={query}
					placeholder="Enter your search query here"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
			{numResults > 0 ? (
        <p>{numResults} {numResults === 1 ? "result" : "results"} match your search</p>
      ) : (
        <p>No results match your search</p>
      )}
      {spaces}
		</section>

	)
}

export default BookList;