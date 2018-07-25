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
    const response = await fetch(`${API_HOST}/authors`);
    const data = response.ok ? await response.json() : [];
    this.setState({
      authors: data
    });
  }
}

export default Authors;
