import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'

const Header = () => {
    const linkStyles = {
        margin: '5px',
        padding: '0 5px',
        textDecoration: 'none',
        color: 'gold'
    }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{height: '35px', backgroundColor: 'gold'}} src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-lg-center align-items-end">
                        <Link style={linkStyles} to="/home">Home</Link>
                        <Link style={linkStyles} to="/donation">Donation</Link>
                        <Link style={linkStyles} to="/events">Events</Link>
                        <Link style={linkStyles} to="/blog">Blog</Link>
                        <Link style={linkStyles} to="/register"><button className="btn btn-primary">Register</button></Link>
                        <Link style={linkStyles} to="/admin"><button className="btn btn-light">Admin</button></Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;