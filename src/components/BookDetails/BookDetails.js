import React from 'react';
import { useParams } from 'react-router';
import data from '../../book-data.js';
import './BookDetails.css';
import BookFeatureList from '../BookFeatureList/BookFeatureList';

function BookDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, genre, published, website, features, author } = data[id]

  return (
    <article className="BookDetails" aria-label={title}>
      <section className="BookDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </section>
      <section className="BookDetails-info">
        <h1 className="BookDetails-title">{title}</h1>
        <h2 className="BookDetails-author" aria-label="Author">by: {author}</h2>
        <button className="BookDetails-website">
          <a href={website} aria-label="Visit Book's website">Visit {author}'s Website</a>
        </button>
        <BookFeatureList features={features} />
        <p className="BookDetails-desc">{desc}</p>
        <p className="BookDetails-genre" aria-label="Genre">{genre}</p>
        <p className="BookDetails-published" aria-label="Date Published">Date Published: {published}</p>
      </section>
    </article>
  )
}

export default BookDetails;