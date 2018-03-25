import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class Listbook extends React.Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired
	}

	render(){

		let { books, title} = this.props;
		return(
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{title}</h2>
				<div className='bookshelf-books'>
					<Book 
						books={books}
						onUpdateShelf={(book, shelf) =>{
                    		this.props.onUpdateShelf(book, shelf)
                		}}
					/>
				</div>
			</div>
			
		)
	}

}


export default Listbook