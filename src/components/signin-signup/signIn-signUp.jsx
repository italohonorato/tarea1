import React, { Component } from 'react';
import Container from "../../../node_modules/react-bootstrap/Container";
import Row from "../../../node_modules/react-bootstrap/Row";
import Col from "../../../node_modules/react-bootstrap/Col";
import SignIn from "../signin/signIn.component";
import SignUp from "../signup/signUp.components";
import { auth, createUserProfile } from "../../firebase/firebase";
import Swal from 'sweetalert2';

class SignInSignup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    handleSignUp = async (event) => {
        const { email, password, displayName } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            const userRef = await createUserProfile(user, { displayName });

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Usuario ${displayName} ha sido Registrado`,
                showConfirmButton: false,
                timer: 2000
            });
        } catch (error) {
            console.error(`Error on SignInSignup::handleSignUp -> ${error}`);
        }
    }

    handleSignIn = async (event) => {
        const { email, password } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            localStorage.setItem('userLoggedIn', user.email);

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Bienvenid@ ${user.email} !`,
                showConfirmButton: false,
                timer: 2000
            });

            this.props.history.push('/home');
        } catch (error) {
            console.error(`Error on SignInSignup::handleSignIn -> ${error}`);
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <SignIn onHandleChange={this.handleChange} onHandleSubmit={this.handleSignIn}></SignIn>
                    </Col>
                    <Col md={{ span: 2, offset: 2 }}>
                        <SignUp onHandleChange={this.handleChange} onHandleSubmit={this.handleSignUp}></SignUp>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignInSignup;