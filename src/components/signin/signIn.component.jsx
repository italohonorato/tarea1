import React, { Component } from 'react';
import Form from "../../../node_modules/react-bootstrap/Form";
import Button from "../../../node_modules/react-bootstrap/Button";
import Card from "../../../node_modules/react-bootstrap/Card";

class SignIn extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        this.props.onHandleChange(event);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(event);
    }

    render() {
        return (
            <Card bg="secondary" text="white" style={{ width: '400px' }} className="mt-5">
                <Card.Header>SIGN IN</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="singinForm">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                <Form.Text text="white">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="light" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>

        );
    }
}

export default SignIn;
