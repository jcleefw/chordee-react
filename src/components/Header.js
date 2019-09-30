import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

const Header = () => {
  return <Navbar color="primary">
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="/">
        Chordee
      </Navbar.Item>
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/songs">Songs</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
}

export default Header;