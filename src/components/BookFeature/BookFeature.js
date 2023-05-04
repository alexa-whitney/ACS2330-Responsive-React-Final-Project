import React from 'react'
import './BookFeature.css'

function getFeature(str) {
	switch(str) {
		case 'scary':
			return '😱'
		case 'spice':
			return '🌶'
		case 'funny':
			return '🤣'
		case 'trigger warning':
			return '⚠️'
		case 'gore':
			return '🔪'
		case 'love story':
			return '💕'
		case 'kids':
			return '🧒'
    	case 'animals':
			return '🐕'
    	case 'magic':
			return '🪄'
        case 'LGBTQ':
			return '🏳️‍🌈'
    
		default:
			return '？'
	}
}

function BookFeature(props) {
	const emoji = getFeature(props.name)
	return (
		<div className="BookFeature" title={props.name}>
		  <span aria-hidden="true">{emoji}</span>
		  <span className="BookFeature-title">{props.name}</span>
		</div>
	  );
}

export default BookFeature;