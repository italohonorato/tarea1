import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import React, { Component } from 'react';

class SingUp extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.onHandleChange(event);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(event);
    }

    render() {
        return (
            <Card bg="dark" text="white" style={{ width: '400px' }} className="mt-5">
                <Card.Header>SIGN UP</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="fgDisplayName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="displayName" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="fgEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="fgPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="light" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default SingUp;