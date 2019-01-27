import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './ListOfBooks'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

class BooksApp extends Component {

// Set initial state
  state = {
    books : []
  }

//Get available books from the server
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className='app'>
        <ListOfBooks />
        <BookShelf title='Currently Reading' shelf='currentlyReading' books={this.state.books}/>
        <BookShelf title='Want to Read' shelf='wantToRead' books={this.state.books} />
        <BookShelf title='Read' shelf='read' books={this.state.books} />
        <OpenSearch />
      </div>
    )
  }
}

export default BooksApp
