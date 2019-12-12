import React, { Component, Route } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Stub extends Component {

    state = {
        Stubdata: []
    }

    componentDidMount() {

    }

    render() {
        const { stubdata } = this.state;
        console.log(stubdata)
        return (
            <div className="contact-body">
                <Cell>
                    <h1>Stubbed Component</h1>
                    <hr />
                    <Grid>
                        <div className="stubbed-list">


                            <h2>Stubbed Data Here</h2>

                        </div>
                    </Grid>
                </Cell>

            </div>
        )
    }
}

export default Stub;