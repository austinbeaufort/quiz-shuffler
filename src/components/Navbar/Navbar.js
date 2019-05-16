import React, { Component } from 'react';
import logo from '../../img/logo.png';
import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <Link to="/">
                            <NavbarBrand><img src={logo} width="250px" alt="Quiz Randomizer"/></NavbarBrand>
                        </Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className={styles.link + ' pl-4 pr-4 pt-1 pb-1'} to='/'>
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className={styles.link + " pl-4 pr-4 pt-1 pb-1"} to="/about">
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className={styles.link + " pl-4 pr-4 pt-1 pb-1"} to="/contact">
                                        Contact
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;