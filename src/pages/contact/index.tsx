import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import api from '../../services/api';

import faleConnoscoImg from '../../assets/images/fale-conosco-button.png';
import HaveEmailSentImg from '../../assets/images/undraw_Mail_sent_qwwx.svg';

import './styles.css';


const ContactUs = () => {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');


    const HandleMailer = (e: FormEvent) => {
        e.preventDefault();
        
        api.post('/send', {
            name,
            telefone,
            email,
            message
        }).then(() => {
            alert('Registo feito com sucesso obrigado. Obrigado!');

            history.push('/');
        }).catch(() => {

            alert('erro no cadastro');
        })
    }

    return (
        <div>
            <Container fluid>
                <Row id="container-blockContact">
                    <Col md={4}>
                        <Image src={faleConnoscoImg} alt="fale connosco" fluid />
                        <Image id="HaveEmailSent" src={HaveEmailSentImg} alt="Email enviado" fluid />
                    </Col>

                    <Col md={6}>
                        <form onSubmit= { HandleMailer }>
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
                                    value={telefone}
                                    onChange={(e) => { setTelefone(e.target.value) }}
                                />
                                
                                <Input  
                                    name="email" 
                                    label="Endereço de email" 
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
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
        </div>
    )
}

export default ContactUs;