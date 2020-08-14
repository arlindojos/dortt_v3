import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';

import profileImg from '../../assets/images/undraw_profile_pic_ic5t.svg'

import './styles.css';


const SignUp = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <div className="profile">
                            <Image 
                                src={profileImg}
                                alt="Seus dados de cadastro" 
                                fluid
                            />
                        </div>
                        <main className="mainWrapper">
                            <form>
                                <fieldset>
                                    <legend>Seus dados</legend>
                                    <Input  name="name" 
                                        label="Nome" 
                                        value=""
                                    />
                                    <Input  name="surname" 
                                        label="Sobrenome" 
                                        value=""
                                    />
                                    <Input  name="email" 
                                        label="Endereço de email" 
                                        value=""
                                    />
                                    <Input  name="password" 
                                        label="Crie uma senha" 
                                        value=""
                                    />
                                    <Input  name="cfrPassword" 
                                        label="Confirme a senha" 
                                        value=""
                                    />
                                </fieldset>

                                <fieldset>
                                    <legend>Porfavor seleciona conteúdo do seu interesse</legend>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Programação" />
                                        <Form.Check type="checkbox" label="Websites" />
                                    </Form.Group>
                                </fieldset>

                                <div className="submitButton">
                                    <Button type="submit" >
                                        Salvar cadastro
                                    </Button>
                                </div>
                            </form>

                            <div className="login-link">
                                Já é escrito? 
                                <Link to="/log_in">
                                    Entrar na conta
                                </Link>
                            </div>
                        </main>
                    </Col>
                </Row>
            </Container>

            <WhatsappForm />
        </div>
    )
}

export default SignUp;