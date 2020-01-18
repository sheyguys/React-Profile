import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Happy Coding',
      headerLink: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        name: 'Kasinan .R',
        faculty: 'Engineering',
        subject: 'Computer Engineering'
      },
      about: {
        name: 'About Me',
      },
      contact: {
        name: 'Let\'s Talk',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Happy Coding</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={ () => <HomePage name={this.state.home.name} faculty={this.state.home.faculty} subject={this.state.home.subject}/>} /> 
          <Route path="/about" render={ () => <AboutPage name={this.state.about.name} />} /> 
          <Route path="/contact" render={ () => <ContactPage name={this.state.contact.name}/>} /> 
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
