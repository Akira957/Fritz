import React, { Component, Route } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Link } from "react-router-dom";



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


  renderCategory = ({ category_id, category_name }) => <List><Link to="/Stub" key={category_id}>{category_name}</Link></List>


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


              <List>
                {category.map(this.renderCategory)}
              </List>


            </div>
          </Grid>
        </Cell>

      </div>
    )
  }
}

export default Categories;