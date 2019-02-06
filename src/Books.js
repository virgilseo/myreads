import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Books extends Component {

  render() {

    const {book} = this.props

// Display the correct shelf for books on the search page
    if (!book.shelf) {
      let searchBook = this.props.books.filter(b => b.id === book.id).map((b) => { return b.shelf })
      
      book.shelf = searchBook.toString()
    }

    return(

       <div className="book">
          <div className="book-top">
            <div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
            <ChangeShelf
              books={this.props.books}
              book={book}
              shelf={this.props.shelf}
              changeShelf={this.props.changeShelf}
             />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors : 'Author unknown'}</div>
       </div>
    )
  }
}

export default Books
