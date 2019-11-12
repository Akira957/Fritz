import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
    
      toggleCategories() {
    
        if(this.state.activeTab === 0){
          return(
            <div className="artists-grid">
              
            </div>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div><h1>Artist 1</h1></div>
          )
        } else if(this.state.activeTab === 2) {
          return (
            <div><h1>Artist 2</h1></div>
          )
        } else if(this.state.activeTab === 3) {
          return (
            <div><h1>Artist 3</h1></div>
          )
        }
      }

    render() {
        return (
            <h1>Names of the artists</h1>
        )
    }
}

export default Artist;