import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import faleConnoscoImg from '../../assets/images/fale-conosco-button.png';
import HaveEmailSentImg from '../../assets/images/undraw_Mail_sent_qwwx.svg';

import './styles.css';


const ContactUs = () => {
    return (
        <div>
            <Container fluid>
                <Row id="container-blockContact">
                    <Col md={4}>
                        <Image src={faleConnoscoImg} alt="fale connosco" fluid />
                        <Image id="HaveEmailSent" src={HaveEmailSentImg} alt="Email enviado" fluid />
                    </Col>

                    <Col md={6}>
                        <form>
                            <fieldset>
                                <Input  
                                    name="name" 
                                    label="Nome Completo" 
                                    value=""
                                />

                                <Input  
                                    name="telefone" 
                                    label="Número de telefone ou celular" 
                                    value=""
                                    type="tel"
                                />
                                
                                <Input  
                                    name="email" 
                                    label="Endereço de email" 
                                    value=""
                                    type="email"
                                />
                                <TextArea
                                    name="message" 
                                    label="Em que podemos ajudar?" 
                                />
                            </fieldset>
                            <Button type="submit">Enviar</Button>
                        </form>

                        <Image id="HaveEmailSent02" src={HaveEmailSentImg} alt="Email enviado" fluid />
                    </Col>
                </Row>
            </Container>

            <WhatsappForm />
        </div>
    )
}

export default ContactUs;