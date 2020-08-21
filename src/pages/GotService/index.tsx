import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Input from '../../components/Input';
import Select from '../../components/select';
import TextArea from '../../components/TextArea';
import api from '../../services/api';

import SteppingUpImg from '../../assets/images/undraw_stepping_up_g6oo.svg';

import './styles.css';



const GotService = () => {
    const history = useHistory();
    
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ userService, setUserService ] = useState('');
    const [ message, setMessage ] = useState('');

    const HandleServices = (e: FormEvent) => {
        e.preventDefault();

        api.post('/send', {
            name,
            email,
            telefone,
            userService,
            message
        }).then(() => {
            alert('Entraremos em contacto em breve. Obrigado!');

            history.push('/');
        }).catch(() => {

            alert('erro no envio dos dados');
        })
    }

    return (
        <div>
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
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                
                                <Input  name="telefone" 
                                    label="Telefone"
                                    placeholder="Telefone"
                                    value={telefone}
                                    onChange={(e) => { setTelefone(e.target.value) }}
                                />
                            </fieldset>

                            <fieldset>
                                <legend>Selecione o serviço</legend>

                                <Select
                                    name="userService"
                                    label=""
                                    value={userService}
                                    onChange={(e) => setUserService(e.target.value) }
                                    options={[
                                        { value: 'Website', label: 'Website' },
                                        { value: 'Blog', label: 'Blog' },
                                        { value: 'Logo', label: 'Logo' },
                                        { value: 'E-mail profissional', label: 'E-mail profissional' },
                                        { value: 'Otimização de website', label: 'Otimização de website' }
                                    ]}
                                />

                                <TextArea
                                    name="message" 
                                    label="Opcional" 
                                    placeholder="Mensagem adicional"
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
        </div>
    )
}

export default GotService;