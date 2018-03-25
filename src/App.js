import React from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './component/Bookshelf'
import Searcbooks from './component/Searcbooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

    state = {
        showSearchPage: false,
        books: [],
        searcbooks: []
    }

    //生命周期函数，插入组件后立即调用
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    //更改书架
    updateShelf(book, shelf){
        BooksAPI.update(book, shelf)
        .then(() => BooksAPI.getAll())
        .then((books) => {
            this.setState({books})
        })
    }

    //搜索
    searcBooks(query){
        console.log('query = '+query)
        BooksAPI.search(query)
        .then((books) => {
            if(!Array.isArray(books)){
                this.setState({searcbooks: []})
            }else{
                this.setState({searcbooks: books})
            }
        })
    }

    render() {

        let { books, searcbooks } = this.state

        console.log(searcbooks)

        return (
            <div className="app">
                <Route exact path='/' render={() =>(
                    <Bookshelf 
                        books={books}
                        onUpdateShelf={(book, shelf) =>{
                            this.updateShelf(book, shelf)
                        }}
                    />
                )}/>

                <Route path='/searcbook' render={({history}) =>(
                    <Searcbooks 
                        bookshelf={books}
                        searcbooks={searcbooks}
                        onSearcBooks={(query) =>{
                            this.searcBooks(query)
                        }}
                        onUpdateShelf={(book, shelf) =>{
                            this.updateShelf(book, shelf)
                            history.push('/')
                        }
                    }/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
