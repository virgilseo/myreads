import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

// Set the initial state
  state = {
    query:'',
    newBooks: []
  }

  updateQuery = (query) => {

//Update the query state on user input
     this.setState({ query: query.trim() })

//Query the server based on user input
     BooksAPI.search(this.state.query).then((searchResults) => {

       if(!searchResults || searchResults.error) {
         this.setState({newBooks: []})
       }else {
         this.setState({newBooks: searchResults.filter(book => book.imageLinks)})
       }

//Clear the search resulsts if the query is empty
       if(this.state.query === '') {
         this.setState({newBooks: []})
       }
    })
 }

  render() {

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.newBooks.map((book) => (
               <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                      <div className="book-shelf-changer">
                        <select value='none'>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none" disabled>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
       )
    }
  }


export default SearchPage
