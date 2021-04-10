import React, { Component, Route, Children } from "react";
import ReactDOM from "react-dom";
import { Switch } from "react-router-dom";
import Categories from "./Categories"
import { List, ListItem } from "react-mdl";

class ArtworkList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_id: []
        }
    }



    Artwork = (props) => {
        this.setState({ props });
    }

    componentDidMount() {

    }

    render() {
        const category_id = this.props
        console.log(category_id)
        console.log(this.props.location)
        console.log(this.props.location.test)
        return (
            <div className="contact-body">

                <h1>List of Artwork</h1>
                <hr />

                <div className="picture-list">

                    <Categories />


                </div>

            </div>
        )
    }

}
export default ArtworkList;