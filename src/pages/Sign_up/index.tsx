import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';
import api from '../../services/api';

import profileImg from '../../assets/images/undraw_profile_pic_ic5t.svg'

import './styles.css';


const SignUp = () => {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cfrPassword, setCfrPassword ] = useState('');
    const [ development, setDevelopment ] = useState(false);
    const [ websites, setWebsites ] = useState(false);

    const HandleRegisters = (e: FormEvent) => {
        e.preventDefault();
        
        api.post('/api', {
            name,
            surname,
            email,
            password,
            cfrPassword,
            development,
            websites
        }).then(() => {
            alert('Registo feito com sucesso obrigado. Obrigado!');

            history.push('/');
        }).catch(() => {

            alert('erro no cadastro');
        })
    }

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
                            <form onSubmit={ HandleRegisters }>
                                <fieldset>
                                    <legend>Seus dados</legend>
                                    <Input  
                                        name="name" 
                                        label="Nome" 
                                        value={name}
                                        onChange={ (e) => { setName(e.target.value) }}
                                    />
                                    <Input  
                                        name="surname" 
                                        label="Sobrenome" 
                                        value={surname}
                                        onChange={ (e) => { setSurname(e.target.value) }}
                                    />
                                    <Input 
                                        name="email" 
                                        label="Endereço de email" 
                                        value={email}
                                        onChange={ (e) => { setEmail(e.target.value) }}
                                    />
                                    <Input  name="password" 
                                        label="Crie uma senha" 
                                        value={password}
                                        onChange={ (e) => { setPassword(e.target.value) }}
                                    />
                                    <Input  name="cfrPassword" 
                                        label="Confirme a senha" 
                                        value={cfrPassword}
                                        onChange={ (e) => { setCfrPassword(e.target.value) }}
                                    />
                                </fieldset>

                                <fieldset>
                                    <legend>Porfavor seleciona conteúdo do seu interesse</legend>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Programação"
                                            checked={development}
                                            onChange={ (e: any) => { setDevelopment(e.target.checked) }}
                                        />

                                        <Form.Check 
                                            type="checkbox" 
                                            label="Websites"
                                            checked={websites}
                                            onChange={ (e: any) => { setWebsites(e.target.checked) }}
                                        />
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