import React, { useState, FormEvent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import api from '../../services/api';

import faleConnoscoImg from '../../assets/images/fale-conosco-button.png';
import HaveEmailSentImg from '../../assets/images/undraw_Mail_sent_qwwx.svg';

import './styles.css';


const ContactUs = () => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ emailUsr, setEmailUsr ] = useState('');
    const [ message, setMessage ] = useState('');

    //Alert User
    const [ alertMessage, setAlertMessage ] = useState('');
    const [ showUserID, setShowUserID ] = useState('CloseUserError-Mail');
    const [ alertColor, setAlertColor ] = useState({});


    const HandleMailer = (e: FormEvent) => {
        e.preventDefault();

        const subject = 'Nova Solicitação de support'
        api.post('/user/send', {
            subject,
            name,
            phone,
            emailUsr,
            message
        }).then(() => {
            setName('')
            setPhone('')
            setEmailUsr('')
            setMessage('')
            
            setAlertMessage('Recebemos o seu email, entraremos em contacto.')
            setShowUserID('')
            setAlertColor({color: '#0088a9'})
        }).catch(() => {

            setAlertMessage('Não foi possível enviar o email. Por favor, tente novamente.')
            setShowUserID('')
            setAlertColor({color: '#dc3545'})
        })
    }

    return (
        <div>
            <Header />
            <Container fluid>
                <Row id="container-blockContact">
                    <Col md={4}>
                        <Image src={faleConnoscoImg} alt="fale connosco" fluid />
                        <Image id="HaveEmailSent" src={HaveEmailSentImg} alt="Email enviado" fluid />
                    </Col>

                    <Col md={6}>
                        <form onSubmit= { HandleMailer }>

                            <div id={showUserID} className="showUserError-Mail">
                                <div style={alertColor}> 
                                    {alertMessage}
                                </div>
                            </div>

                            <fieldset>
                                <Input  
                                    name="name" 
                                    label="Nome Completo" 
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />

                                <Input  
                                    name="telefone" 
                                    label="Número de telefone ou celular" 
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                                
                                <Input  
                                    name="email" 
                                    label="Endereço de email" 
                                    value={emailUsr}
                                    onChange={(e) => { setEmailUsr(e.target.value) }}
                                    type="email"
                                />
                                <TextArea
                                    name="message" 
                                    label="Em que podemos ajudar?" 
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </fieldset>
                            <Button type="submit">Enviar</Button>
                        </form>

                        <Image id="HaveEmailSent02" src={HaveEmailSentImg} alt="Email enviado" fluid />
                    </Col>
                </Row>
            </Container>

            <WhatsappForm />
            <Footer />
        </div>
    )
}

export default ContactUs;