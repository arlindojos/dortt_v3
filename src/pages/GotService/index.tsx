import React, { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Select from '../../components/select';
import TextArea from '../../components/TextArea';
import api from '../../services/api';

import SteppingUpImg from '../../assets/images/undraw_stepping_up_g6oo.svg';

import './styles.css';



const GotService = () => {
    const userData: any = useSelector(state => state);
    
    const { requestedService } = userData.userActions;
    
    const [ name, setName ] = useState('');
    const [ emailUsr, setEmailUsr ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ userService, setUserService ] = useState('');
    const [ message, setMessage ] = useState('');

    //Alert User
    const [ alertMessage, setAlertMessage ] = useState('');
    const [ showUserID, setShowUserID ] = useState('CloseUserError-Mail');
    const [ alertColor, setAlertColor ] = useState({});

    const HandleServices = (e: FormEvent) => {
        e.preventDefault();

        const subject = `Nova Solicitação do serviço ${requestedService}`
        api.post('/api/send', {
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
        <>
            <Header />
            <div id="main-header-GotService">
                <Container  fluid>
                    <Row id="header-content">
                        <Col md={5}>
                            <Image src={SteppingUpImg} fluid />
                        </Col>

                        <Col className="text" md={7}>
                            <h3>Agradecemos o interesse em nossos serviços</h3>
                            <p>Por favor fale connosco pelos número <i className="fas fa-phone-alt"></i> <span>+258 87/84 4444689</span> ou preencha o formulário abaixo para que entremos em contacto.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container id="main-block-GotService">
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <form onSubmit={ HandleServices }>
                            <fieldset id="fieldset-01">
                                <legend>Formulário</legend>
                                
                                <Input  name="name" 
                                    label="Seu nome completo ou organização"
                                    placeholder="Seu nome completo ou organização"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                
                                <Input  name="email" 
                                    type="email"
                                    label="Endereço de email"
                                    placeholder="E-mail"
                                    value={emailUsr}
                                    onChange={(e) => { setEmailUsr(e.target.value) }}
                                />
                                
                                <Input  name="telefone" 
                                    label="Telefone"
                                    placeholder="Telefone"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                            </fieldset>

                            <fieldset id="fieldset-02">
                                <legend>Opcional. Descreva o serviço que deseja</legend>

                                <TextArea
                                    name="message" 
                                    label="" 
                                    placeholder="Pode deixar em branco"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </fieldset>
                            
                            <div id="ButtonID">
                                <Button type="submit">Enviar</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default GotService;