import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Nav } from 'react-bootstrap';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'HappyCoding',
      headerLink: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      university: {
        name: 'Suranaree University Of Thecnology',
        faculty: 'Engineering',
        subject: 'Computer Engineering'
      },
      me: {
        name: 'Kasinan Rordthab',
        faculty: 'Engineering',
        subject: 'Computer Engineering'
      },
      meapprentice: {
        name: 'Suranaree University Of Thecnology',
        faculty: 'Engineering',
        subject: 'Computer Engineering'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>HappyCoding</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-control="navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
