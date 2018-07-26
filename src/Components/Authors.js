import React, { Component } from "react";
import { API_HOST } from "../config";

class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }
  componentDidMount() {
      this.getAuthors();
  }
  render() {
    return (
      <div>
        <h3>Authors</h3>
        {this.state.authors.map(author => (
          <li key={author._id}>{author.name}</li>
        ))}
      </div>
    );
  }
  async getAuthors() {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    if(response.ok) {
      const data = await response.json()
      this.setState({
        authors: data
      });
    }
  }
}

export default Authors;
