import React, { useState, FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import api from '../../services/api';

import LogoV3 from '../../assets/images/logo_v3.svg';
import Group1 from '../../assets/images/icons/Group-1.svg';
import Group2 from '../../assets/images/icons/Group-2.svg';
import Group3 from '../../assets/images/icons/Group-3.svg';
import PlussIcon from '../../assets/images/icons/pluss.svg';
import MuiltiplierIcon from '../../assets/images/icons/multiplier.svg';
import CycleIcon from '../../assets/images/icons/cycle.svg';
import SercherIcon from '../../assets/images/icons/sercher.svg';

import './styles.css';


const ResetPassword = () => {
    const { id } = useParams();

    const [ email, setEmail ] = useState('');
    const [ passwordUsr, setPasswordUsr ] = useState('');
    const [ cfrPasswordUsr, setCfrPasswordUsr ] = useState('');

    const [ alertMessage, setAlertMessage ] = useState('');
    const [ alertColor, setAlertColor ] = useState({});
    const [ loginButton, setLoginButton ] = useState({display: 'none'});

     const HandleReset = (e: FormEvent) => {
        e.preventDefault();
        
        if (passwordUsr === cfrPasswordUsr) {
                api.post('/user/reset_password', {
                emailUsr: email,
                passwordUsr,
                passwordResetToken: id
            })
            .then((response) => {
                setEmail('')
                setPasswordUsr('')
                setCfrPasswordUsr('')
                setAlertMessage(response.data)
                setAlertColor({color: '#0088a9'})
                setLoginButton({display: 'block'})
            })
            .catch((err) => {
                setAlertMessage(err.response.data.error)
                setAlertColor({color: '#dc3545'})
            })
        } else {
            setAlertMessage('As suas senhas não se correspondem');
            setAlertColor({color: '#dc3545'})
        }
    }

    return (
        <>
        <Header /> 
        <div className="main-Logs">
            <Container>
                <Row>
                    <Col md={{span: 10, offset: 1}} id="logs-content">
                        <Row>

                            <Col md={6} className="logs-content01">
                                
                                <Row id="Row">
                                    <Col>
                                        <Image id="log-icons" src={PlussIcon} fluid />
                                        <Image className="ml-5" src={Group1} fluid />
                                    </Col>

                                    <Col>
                                        <Image id="log-icons" src={CycleIcon} fluid />
                                        <Image className="float-right mt-5 mr-5" src={Group2} fluid />
                                    </Col>
                                </Row>

                                <Row className="Row02" id="Row">

                                    <Col className="stay-connected-container">
                                        <Image className="mr-5" id="log-icons" src={CycleIcon} fluid />

                                        Estejá conectado

                                        <div id="log-icons" className="ml-3">
                                            <Image src={Group2} fluid />
                                        </div>
                                    </Col>
                                </Row>

                                <Row id="Row">
                                    <Col>
                                        <Image className="mt-5" src={Group3} fluid />
                                    </Col>

                                    <Col>
                                        <Image id="log-icons" src={MuiltiplierIcon} fluid />
                                    </Col>

                                    <Col>
                                        <Image id="log-icons" src={SercherIcon} fluid />
                                    </Col>
                                </Row>

                                <Row id="Row">
                                    <Col>
                                        <div className="logo-container">
                                            <Image src={ LogoV3 } fluid />
                                        </div>
                                    </Col>   
                                </Row>

                            </Col>

                            <Col md={6} className="logs-content02">
                                <form onSubmit={ HandleReset }>
                                    <fieldset>
                                        <legend>
                                            Recuperar senha
                                        </legend>

                                        <Button style={loginButton} id="ButtonGoTo-LogIn" className="ButtonGoTo-LogIn">
                                            <Link to="/log_in">
                                                Log In
                                            </Link>
                                        </Button>

                                        <div style={alertColor}>{alertMessage}</div>

                                        <Input
                                            name="email"
                                            label=""
                                            placeholder="Seu E-mail"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}    
                                        />
                                        <Input  name="password" 
                                                label="Criar nova senha" 
                                                autoComplete="knew-password"
                                                type="password" 
                                                value={passwordUsr}
                                                onChange={ (e) => { setPasswordUsr(e.target.value) }}
                                                required
                                            />

                                            <Input  name="cfrPassword" 
                                                label="Confirme a senha" 
                                                autoComplete="knew-password"
                                                type="password"
                                                value={cfrPasswordUsr}
                                                onChange={ (e) => { setCfrPasswordUsr(e.target.value) }}
                                                required
                                            />
                                    </fieldset>

                                    <div className="Link-Container">
                                        <Link to="/log_in">
                                            Lembrei-me da senha
                                        </Link>
                                    </div>

                                    <div id="ButtonID">
                                        <div id="buttonID">
                                            <Button type="submit">Enviar</Button>
                                        </div>
                                    </div>

                                </form>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export default ResetPassword;