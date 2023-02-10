import React from 'react'
import './BookFeature.css'

function getFeature(str) {
	switch(str) {
		case 'scary':
			return '😱'
		case 'spice':
			return '🌶'
		case 'trigger warning':
			return '⚠️'
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
	return <div className="BookFeature">{emoji}</div>
}

export default BookFeature;