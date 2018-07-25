import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async getBooks() {
    const response = await fetch("http://localhost:3000/books");
    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  }
  async componentDidMount() {
    const data = await this.getBooks();
    this.setState({
      books: data
    });
  }

  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return (
            <li key={book._id}>
              {book.title}, by {book.author ? book.author.name : ""}
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
