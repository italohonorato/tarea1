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
            const response = await auth.createUserWithEmailAndPassword(email, password)
                .catch(error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'The password is too weak.',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: errorMessage,
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                    console.log(`Error on SignInSignup::handleSignUp -> ${error}`);
                });

            if (response != undefined) {
                const { user } = response;
                const userRef = await createUserProfile(user, { displayName });

                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Usuario ${displayName} ha sido Registrado`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        } catch (error) {
            console.error(`Error on SignInSignup::handleSignUp -> ${error}`);
        }
    }

    handleSignIn = async (event) => {
        const { email, password } = this.state;

        try {
            const response = await auth.signInWithEmailAndPassword(email, password)
                .catch(error => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `Invalid Email and/or Password!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                });

            if (response !== undefined) {
                const { user } = response;
                localStorage.setItem('userLoggedIn', user.email);

                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Bienvenid@ ${user.email} !`,
                    showConfirmButton: false,
                    timer: 2000
                });

                this.props.history.push('/home');
            }
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