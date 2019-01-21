import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './ListOfBooks'

class BooksApp extends Component {

// Set initial state
  state = {
    books : []
  }

//Get available books from the server
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className='app'>
        <ListOfBooks />
      </div>
    )
  }
}

export default BooksApp
