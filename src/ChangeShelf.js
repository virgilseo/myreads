import React, {Component} from 'react'


class ChangeShelf extends Component {

  render() {

  let book = this.props.book
  let changeShelf = this.props.changeShelf

    return(
      <div className="book-shelf-changer">
        <select  value={book.shelf ? book.shelf : 'none'} onChange={(event) => {changeShelf(book,event.target.value)}}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ChangeShelf
