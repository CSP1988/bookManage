import React from 'react'
import PropTypes from 'prop-types'


class Book extends React.Component {

	static propTypes = {
		books: PropTypes.array.isRequired,

	}

	updateshelf = (book, shelfValue) => {
		if(this.props.onUpdateShelf){
			this.props.onUpdateShelf(book, shelfValue)
		}
	}
	
	render(){
		let { books } = this.props

		const bookStyle = (book) =>{
			if(book.imageLinks !== undefined){
				return{
					width: 128, 
					height: 193, 
					backgroundImage: `url(${book.imageLinks.smallThumbnail})`
				}
			}else{
				return{
					width: 128, 
					eight: 193	
				}
			}
		}

		return(
			<ol className="books-grid">
				{books.map((book) =>(
				    <li key={book.id}>
				    {console.log(book)}
						<div className="book">
			                <div className="book-top">
			                    <div className="book-cover" style={bookStyle(book)}></div>
			                    <div className="book-shelf-changer">
			                        <select
			                        	onChange={(event)=>(this.updateshelf(book, event.target.value))
			                        	}
			                        	value={book.shelf}
			                        >
			                            <option value="none" disabled>Move to...</option>
			                            <option value="currentlyReading">Currently Reading</option>
			                            <option value="wantToRead">Want to Read</option>
			                            <option value="read">Read</option>
			                            <option value="none">None</option>
			                        </select>
			                    </div>
			                </div>
			                <div className="book-title">{book.title}</div>
			                <div className="book-authors">{book.authors}</div>
			            </div>
			        </li>
				))}
			</ol>
		)
	}

}


export default Book