import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import api from '../../services/api';

import './styles.css';


const ForgotPassword = () => {
    const history = useHistory();

    const [ email, setEmail ] = useState('');

    //Alert User
    const [ alertMessage, setAlertMessage ] = useState('');
    const [ showUserID, setShowUserID ] = useState('CloseUserError-Mail');
    const [ alertColor, setAlertColor ] = useState({});

     const HandleReset = (e: FormEvent) => {
        e.preventDefault();
        
        api.post('/user/forgot_password', {
            emailUsr: email,
        }).then((response) => {
            setAlertMessage(response.data)
            setShowUserID('')
            setAlertColor({color: '#0088a9'})

        }).catch((err) => {

            setAlertMessage(err.response.data.error)
            setShowUserID('')
            setAlertColor({color: '#dc3545'})
        })
    }

    return (
        <>
            <Header /> 
            <Container>
                <Row>
                    <Col id="main-blockReset" md={{span: 8, offset: 2}}>
                        <form onSubmit={ HandleReset }>

                            <div id={showUserID} className="showUserError-Mail">
                                <div style={alertColor}> 
                                    {alertMessage}
                                </div>
                            </div>

                            <fieldset>
                                <legend>
                                    Recuperar senha
                                </legend>

                                <Input
                                    name="email"
                                    label="Um email será enviado com as instruções de como recuperar sua senha"
                                    placeholder="Seu E-mail"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}    
                                />
                            </fieldset>

                            <div className="Link-Container">
                                <Link to="/log_in">
                                    Lembrei-me da senha
                                </Link>
                            </div>

                            <div id="ButtonID">
                                <Button type="submit">
                                    Recuperar senha pelo email
                                </Button>
                            </div>

                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ForgotPassword;