import data from './books-data.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data;