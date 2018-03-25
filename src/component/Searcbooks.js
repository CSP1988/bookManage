import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as _ from 'lodash'

class Searcbooks extends React.Component {

	static propTypes = {
		searcbooks: PropTypes.array.isRequired,
		onSearcBooks: PropTypes.func.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	//输入完毕再执行搜索（延迟执行）
	searchBooks = _.debounce(query => {
		if(query !== ' ' && query !== ''){
			this.props.onSearcBooks(query.trim())
		}
	}, 400)

	render(){
		let { bookshelf, searcbooks, onUpdateShelf } = this.props;
		
		const classedBook = searcbooks.map((sBook) => {
            let isInSelfBooks = false
            bookshelf.forEach(books => {
            	
                if (sBook.id === books.id) {
                    sBook.shelf = books.shelf;
                    isInSelfBooks = true;
                    return;
                }
            })
            if (!isInSelfBooks)
                sBook.shelf = 'none';
            return sBook;
        })
		
		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              	<Link className="close-search" to='/'>Close</Link>
			            <div className="search-books-input-wrapper">
			                <input onChange={(event)=>
		                		this.searchBooks(event.target.value)} 
		                		type="text" 
		                		placeholder="Search by title or author"
			                />	
			            </div>
	            </div>
	            <div className="search-books-results">
      				<Book 
      					books={classedBook}
      					onUpdateShelf={(book, shelf) =>{
                    		onUpdateShelf(book, shelf)
                		}}
      				/>
	            </div>
          	</div>
		)
	}

}


export default Searcbooks