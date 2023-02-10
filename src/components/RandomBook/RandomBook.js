import { useNavigate } from 'react-router-dom'
import './RandomBook.css';
import data from '../../book-data.json'

function RandomBook() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomBook"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Show me a random book!</button>
  )
}

export default RandomBook