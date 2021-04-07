import React, { Component } from "react";
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from '../../../node_modules/react-bootstrap/Form';
import './header.styles.scss';
import { auth } from "../../firebase/firebase";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout = async (event) => {
        try {
            await auth.signOut();
            this.props.history.push('/signinsignup');
            // return <Redirect to='/signinsignup' />
        } catch (error) {
            console.error(`Header::handleLogout Error -> ${error}`);
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='home'>Tarea 1</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='home'>Home</Nav.Link>
                    <Nav.Link href='signinsignup'>Sign In/Sing Up</Nav.Link>
                    <Nav.Link href="registeredUsers">Registered Users</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {
                        this.props.currentUser && (<Navbar.Text>Signed in as: <a href="#">{this.props.currentUser.email}</a></Navbar.Text>)
                    }
                </Navbar.Collapse>
                {
                    this.props.currentUser && (
                        <Form inline className="ml-2">
                            <Button variant="outline-info" onClick={this.handleLogout}>Logout</Button>
                        </Form>
                    )
                }
            </Navbar>
        );
    }
}

export default Header;
