import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main"

function App() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
        <Header transparent title="Menu" style={{ color: 'white' }}>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
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
