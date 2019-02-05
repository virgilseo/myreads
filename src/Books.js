import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Books extends Component {

  render() {

    const {book} = this.props

    return(

       <div className="book">
          <div className="book-top">
            <div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
            <ChangeShelf
              books={this.props.books}
              shelf={this.props.shelf}
              book={book}
              changeShelf={this.props.changeShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
       </div>
    )
  }
}

export default Books
