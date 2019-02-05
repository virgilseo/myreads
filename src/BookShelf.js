import React, {Component} from 'react'
import Books from './Books'


class BookShelf extends Component {

  render() {

// Assign books to their appropiate shelfs
    let filterdBooks = this.props.books.filter((b) => b.shelf === this.props.shelf)

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {filterdBooks.map((book) => (
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
        </div>
      </div>
    )
  }
}



export default BookShelf
