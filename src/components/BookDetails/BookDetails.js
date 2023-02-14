import React from 'react';
import { useParams } from 'react-router';
import data from '../../book-data.js';
import './BookDetails.css';
import BookFeatureList from '../BookFeatureList/BookFeatureList';

function BookDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, genre, published, website, features } = data[id]

  return (
    <div className="BookDetails">
      <div className="BookDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className="BookDetails-info">
        <h1 className="BookDetails-title">{ title }</h1>
        <BookFeatureList features={features}/>
        <p className="BookDetails-desc">{ desc }</p>
        <p className="BookDetails-genre">{ genre }</p>
        <p className="BookDetails-published">{ published }</p>
        <p className="BookDetails-website">{ website }</p>
      </div>
    </div>
  )
}

export default BookDetails;