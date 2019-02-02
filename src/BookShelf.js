import React, {Component} from 'react'
import Books from './Books'


class BookShelf extends Component {

  render() {

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <Books
            books={this.props.books}
            shelf={this.props.shelf}
            changeShelf={this.props.changeShelf}
           />
         </div>
        </div>
    )
  }
}



export default BookShelf
