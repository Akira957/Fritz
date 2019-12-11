import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from "./pages/main"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Sarah Fritz</Link>} scroll>
          <Navigation>
            <Link to="/">Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Artist">Artists</Link>
            <Link to="/Categories">Categories</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
