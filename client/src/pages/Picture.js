import React, { Component, Route } from "react";
import { Link } from "react-router-dom";

class Picture extends Component {

    state = {
        category: []
    }

    render() {
        const { pictures } = this.state;
        console.log(pictures)
        return (
            <div className="contact-body">
                <Cell>
                    <h1>Pictures for the Gallery</h1>
                    <hr />
                    <Grid>
                        <div className="picture-list">


                            <h2>Picture Data Here</h2>

                        </div>
                    </Grid>
                </Cell>

            </div>
        )
    }
}

export default Picture;