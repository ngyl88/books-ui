import React, { Component } from "react";
import { API_HOST } from "../config";

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  async componentDidMount() {
    await this.getBooks();
  }
  render() {
    return (
      <div>
        <h3>Books</h3>
        {this.state.books.map(book => (
          <li key={book._id}>
            {book.title}, by {book.author ? book.author.name : ""}
          </li>
        ))}
      </div>
    );
  }
  async getBooks() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    if(response.ok) {
      const data = await response.json()
      this.setState({
        books: data
      });
    }
  }
}

export default Books;
