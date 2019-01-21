import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

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
      </div>
    )
  }
}

export default BooksApp
