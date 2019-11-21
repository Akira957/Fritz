import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media.licdn.com/dms/image/C4E03AQGFdczggbUTpQ/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=0Amc8fL_qYTb4mKhPsgyuHzNEiBaYs90CEbMhwDangQ"
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Collector of Art</h1>

                            <hr />
                            <p>This is her collection of art over the years</p>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;