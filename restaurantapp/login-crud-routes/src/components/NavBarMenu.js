import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    Link
} from 'react-router-dom';
export default class NavBarMenu extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Resto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href=""><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href=""><Link to="/create">Create</Link></Nav.Link>
                        {/* <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link> */}
                        <Nav.Link href=""><Link to="/search">Search</Link></Nav.Link>
                        <Nav.Link href=""><Link to="/list">List</Link></Nav.Link>
                        {/* <Nav.Link href="#link"><Link to="/login">login</Link></Nav.Link> */}
                        {
                            localStorage.getItem('login') ?
                                <Nav.Link href=""><Link to="/logout">Logout</Link></Nav.Link>
                                :
                                <Nav.Link href=""><Link to="/login">login</Link></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
