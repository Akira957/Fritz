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
        <Cell col={6}>
          <h2>Sarah Fritz</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: '250px' }}
          />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </Cell>
        <Cell>
          <h2>Categories of Paintings</h2>
          <hr />
          <Grid>
            <div className="category-list">


              <a href="http://localhost:3001/category" onClick={this.getCategory.id}>{category.map(this.renderCategory)}</a>

            </div>
          </Grid>
        </Cell>

      </div>
    )
  }
}

export default Categories;