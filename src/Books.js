import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Books extends Component {

  render() {

 // Assign books to their appropiate shefs
    let filterdBooks = this.props.books.filter((b) => b.shelf === this.props.shelf)

    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
        {filterdBooks.map((book) => (
         <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                <ChangeShelf
                  books={this.props.books}
                  shelf={this.props.shelf}
                  book={book}
                  changeShelf={this.props.changeShelf} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}
export default Books
