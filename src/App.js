import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Menu" style={{ color: 'white' }} className="header-color" scroll>
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
