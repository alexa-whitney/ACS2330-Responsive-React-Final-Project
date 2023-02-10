import React from 'react'
import BookFeature from '../BookFeature/BookFeature'
import './BookFeatureList.css'

function BookFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <BookFeature key={feature} name={feature} />
  })
	return <div className="BookFeatureList">{icons}</div>
}

export default BookFeatureList;