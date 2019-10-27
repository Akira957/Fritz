import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main"
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
        <Header transparent title="Menu" style={{ color: 'white' }} className="header-color">
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/">Main Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Artist">Artist</Link>
            <Link to="/Categories">Categories</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
