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
		return inTitle || inAuthor
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

	return (
		<div className="BookList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{spaces}
		</div>
	)
}

export default BookList;