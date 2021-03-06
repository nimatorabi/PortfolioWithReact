import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css';
const Header = (props) => {
    return (
        <header className="header m-0">
            <Row>
                <Col className="px-0" md={3}>
                    <Navbar className="navbar d-flex flex-column navbar-expand-md" bg="dark" variant="dark">
                        <Navbar.Brand href="#home" className="py-5">
                            <div className="siteTitle text-center ">
                                <a href="#home" className="navbar-brand font-staat font-size-40">NIBI</a>
                                <p className="description text-uppercase fontOs">nima torabi</p>
                            </div>
                        </Navbar.Brand>
                        <Nav className="d-flex flex-column">
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active" href="#home">Home</Nav.Link>
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active" href="#about_me">About</Nav.Link>
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active" href="#Services">Services</Nav.Link>
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active disabled" href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active disabled" href="#News">News</Nav.Link>
                            <Nav.Link className="navLink fontOs text-white-50 fontSize16 active" href="#Contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Button className="toggleButton">
                <span className="fa fa-bars fa-2"></span>
            </Button>
            <div className="social">
                <span className="mr-3">
                    <i className="fa fa-facebook"></i>
                </span>
                <span className="mr-3">
                    <i className="fa fa-twitter"></i>
                </span>
                <span className="mr-3">
                    <i className="fa fa-instagram"></i>
                </span>
                <span className="mr-3">
                    <i className="fa fa-youtube"></i>
                </span>
            </div>
        </header>
    );
}

export default Header;
