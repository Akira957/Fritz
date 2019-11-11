import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Categories extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Sarah Fritz</h2>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </Cell>
              <Cell col={6}>
                <h2>Categories of Paintings</h2>
                <hr/>
                <div className="category-list">
                  
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Categories;