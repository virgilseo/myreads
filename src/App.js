import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './ListOfBooks'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
import SearchPage from './SearchPage'

class BooksApp extends Component {

// Set the initial state
  state = {
    books : []
  }

//Get available books from the server
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//Change the book shelf
  changeShelf = (book, shelf) => {

    this.setState( prevState => ({
      books: prevState.books.map(currentBook => {
        if(currentBook.id === book.id) {
          currentBook.shelf = shelf
          BooksAPI.update(currentBook, shelf)
        }
        return currentBook
      })
    }))
  }

  render() {

    return (
      <div className='app'>
        <ListOfBooks />
        <BookShelf
          title='Currently Reading'
          shelf='currentlyReading'
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
        <BookShelf
          title='Want to Read'
          shelf='wantToRead'
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
        <BookShelf
          title='Read'
          shelf='read'
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
        <OpenSearch />
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
