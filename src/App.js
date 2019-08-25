import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './ListOfBooks'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom'
import BackToTop from './BackToTop'

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

     let bookShelf = this.state.books.filter(b => b.id === book.id)

     if (bookShelf.length === 0) {
      book.shelf = shelf

      BooksAPI.update(book, shelf).then(this.setState(prevState => ({
        books: prevState.books.concat([book])
      })))
    } else {
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
  }

  //Scroll to the top of the page
    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    }


  render() {

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
        <div>
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
          <BackToTop
           scroll={this.scrollToTop}
          />
        </div>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage changeShelf={this.changeShelf} books={this.state.books} scroll={this.scrollToTop}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
