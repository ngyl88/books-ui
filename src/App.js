import React, { Component } from "react";
import "./App.css";

const API_HOST = process.env.REACT_APP_API || "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: []
    };
  }

  async getBooks() {
    const response = await fetch(`${API_HOST}/books`);
    const data = response.ok ? await response.json() : [];
    this.setState({
      books: data
    });
  }
  async getAuthors() {
    const response = await fetch(`${API_HOST}/authors`);
    const data = response.ok ? await response.json() : [];
    this.setState({
      authors: data
    });
  }
  componentDidMount() {
    this.getBooks();
    this.getAuthors();
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        {this.state.books.map(book => {
          return (
            <li key={book._id}>
              {book.title}, by {book.author ? book.author.name : ""}
            </li>
          );
        })}
        <h3>Authors</h3>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
