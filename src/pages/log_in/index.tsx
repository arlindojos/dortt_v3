import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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



const LogIn = () => {
    const history = useHistory();

    const [ emailUsr, setEmail ] = useState('');
    const [ passwordUsr, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ development, setDevelopment ] = useState(false);
    const [ websites, setWebsites ] = useState(false);
    const [ createdAt, setCreatedAt ] = useState('');


    // Show Error
    const [ errorToLogin, seterrorToLogin ] = useState('');

    const HandleLogs = (e: FormEvent) => {
        e.preventDefault();

        api.post('/api/login', {
            emailUsr,
            passwordUsr
        }).then((response) => {
            const { name, surname, emailUsr, development, websites, createdAt } = response.data;
            
            setEmail(emailUsr)
            setName(name)
            setSurname(surname)
            setDevelopment(development)
            setWebsites(websites)
            setCreatedAt(createdAt)


            history.push('/dortt/user_data')
        }).catch(() => {
            
            seterrorToLogin('Credenciais inválidas. Por favor, tente novamente.')
        })
    }
    
    return (
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
                                <form onSubmit={ HandleLogs }>
                                    <fieldset id="input_form">
                                        <legend>
                                            Fazer login
                                        </legend>
                                        <div id="ShowErrors">{ errorToLogin }</div>

                                        <Input  name="email" 
                                            label="E-mail"
                                            placeholder="E-mail"
                                            value={emailUsr}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            required
                                        />

                                        <Input  name="password" 
                                            label="Senha"
                                            placeholder="Senha"
                                            type="password"
                                            value={passwordUsr}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            required
                                        />
                                    </fieldset>

                                    <div id="checkbox_form">
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Lembrar-me" />
                                        </Form.Group>

                                        <Link to="/reset_password">Esqueci minha senha</Link>
                                    </div>

                                    <div id="buttonID">
                                        <Button type="submit">Enviar</Button>
                                    </div>
                                    <p>Não tem conta? <Link to="/sign_up">Cadastrar-se</Link></p>
                                </form>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogIn;