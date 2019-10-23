import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
        <Header transparent title="Menu" style={{ color: 'white' }}>
        </Header>
        <Drawer Menu="Menu">
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
