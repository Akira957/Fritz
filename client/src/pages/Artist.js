import React, { Component } from "react";


class Artist extends Component {

  state = {
    category: []
  }

  componentDidMount() {
    this.getCategory();
  }
  getCategory = _ => {
    fetch("http://localhost:3001/category")
      .then(response => response.json())
      .then(response => this.setState({ category: response.data }))
      .catch(err => console.error(err))
  }


  renderCategory = ({ category_id, category_name }) => <div key={category_id}>{category_name}</div>



  render() {
    const { category } = this.state;
    return (
      <div className="App">
        <h1>Names of the artists</h1>
        <a href="http://localhost:3001/category" onClick={this.renderCategory}>{category.map(this.renderCategory)}</a>
      </div>
    );
  }
}

export default Artist;