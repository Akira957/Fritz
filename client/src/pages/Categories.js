import React, { Component, Route } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Categories extends Component {

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
    console.log(category)
    return (
      <div className="contact-body">

        <Cell>
          <h2>Categories of Paintings</h2>
          <hr />
          <Grid>
            <div className="category-list">


              <a href="http://localhost:3001/:id" onClick={this.getCategory}>{category.map(this.renderCategory)[0]}</a>
              <a href="http://localhost:3001/:id" onClick={this.getCategory}>{category.map(this.renderCategory)[1]}</a>
              <a href="http://localhost:3001/:id" onClick={this.getCategory}>{category.map(this.renderCategory)[2]}</a>
              <a href="http://localhost:3001/:id" onClick={this.getCategory}>{category.map(this.renderCategory)[3]}</a>
              <a href="http://localhost:3001/:id" onClick={this.getCategory}>{category.map(this.renderCategory)[4]}</a>

            </div>
          </Grid>
        </Cell>

      </div>
    )
  }
}

export default Categories;