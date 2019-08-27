import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
import {debounce} from 'lodash';
import BackToTop from './BackToTop'

class SearchPage extends Component {

// Set the initial state
  state = {
    query:'',
    newBooks: []
  }

  updateQuery = debounce((query) => {

//Update the query state on user input
     this.setState({ query: query.trim() })

     if (query) {
       BooksAPI.search(this.state.query).then((searchResults) => {

         if(!searchResults || searchResults.error) {
           this.setState({newBooks: []})
         } else {
    //Filter out the books with no thumbnails
           this.setState({newBooks: searchResults.filter(book => book.imageLinks)})
         }

      })
     }
   //Clear the search results
     if (query.length === 0) {
       this.setState({newBooks: []})
     }
 },700)

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
                 <Books
                   books={this.props.books}
                   shelf={this.props.shelf}
                   changeShelf={this.props.changeShelf}
                   book={book}
                 />
               </li>
              ))}
            </ol>
          </div>
          <BackToTop scroll={this.props.scroll} topBtnClass={this.props.topBtnClass}/>
        </div>
       )
    }
  }


export default SearchPage
