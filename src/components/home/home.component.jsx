import React, { Component, Fragment } from 'react';
import logo from "../../logo.svg";
import Card from '../../../node_modules/react-bootstrap/Card';
import Button from '../../../node_modules/react-bootstrap/Button';
import Row from '../../../node_modules/react-bootstrap/Row';
import Task from '../task/task.component';

class Home extends Component {
    render() {
        return (
            <Row className="justify-content-md-center mt-5">
                <Card style={{ width: '800px' }}>
                    <Card.Img variant="top" src={logo} style={{ height: '50px', width: '50px' }} />
                    <Card.Body>
                        <Card.Title>Tarea Nº 1 React Js Gen 6</Card.Title>
                        <Card.Text>
                            <Fragment>
                                <Task />
                            </Fragment>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row >
        );
    }
}

export default Home;
