import React from 'react'
import PropTypes from 'prop-types'
import Listbook from './Listbook'
import { Link } from 'react-router-dom'


class Bookshelf extends React.Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	constructor(props){
		super(props)
		this.state = {
			headTitle: 'MyReads',
			currentlyReading: 'Currently Reading',
			wantToRead: 'Want to Read',
			Read: 'Read'
		}
	}

	

	render(){

		const {headTitle, currentlyReading, wantToRead, Read} = this.state
		let { books, onUpdateShelf } = this.props;
		
		return(
			<div>
				<div>
					<div className="list-books-title">
              			<h1>{headTitle}</h1>
            		</div>

            		<div className="bookshelf">
	                  	<Listbook
	                  		title={currentlyReading}
	                  		books={books.filter((book) => 
	                  			book.shelf === 'currentlyReading'
	                  		)}
	                  		onUpdateShelf={(book, shelf) =>{
		                        onUpdateShelf(book, shelf)
		                    }}
	                  	/>
	                  	<Listbook
	                  		title={wantToRead}
	                  		books={books.filter((book) => 
	                  			book.shelf === 'wantToRead'
	                  		)}
	                  		onUpdateShelf={(book, shelf) =>{
		                        onUpdateShelf(book, shelf)
		                    }}
	                  	/>
	                  	<Listbook
	                  		title={Read}
	                  		books={books.filter((book) => 
	                  			book.shelf === 'read'
	                  		)}
	                  		onUpdateShelf={(book, shelf) =>{
		                        onUpdateShelf(book, shelf)
		                    }}
	                  	/>

                	</div>
				</div>
				<div className="open-search">
              		<Link to='/searcbook'>Add a book</Link>
            	</div>
			</div>
		)
	}

}



export default Bookshelf