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


              <a href="http://localhost:3000/Stub" onClick={this.getCategory}>{category.map(this.renderCategory)}</a>


            </div>
          </Grid>
        </Cell>

      </div>
    )
  }
}

export default Categories;