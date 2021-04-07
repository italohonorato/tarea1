import React, { Component } from 'react';
import ListGroup from '../../../node_modules/react-bootstrap/ListGroup';
import steps from '../../constants/task';

class Task extends Component {
    render() {
        return (
            <ListGroup variant="flush">
                {
                    steps.map((step, index) => <ListGroup.Item key={index}>{index + 1}. {step}</ListGroup.Item>)
                }
            </ListGroup>
        );
    }
}

export default Task;