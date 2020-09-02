import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm } from '../../components/utilsItem';
import Input from '../../components/Input';
import api from '../../services/api';

import profileImg from '../../assets/images/undraw_profile_pic_ic5t.svg'

import './styles.css';



const SignUp = () => {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ emailUsr, setEmail ] = useState('');
    const [ passwordUsr, setPassword ] = useState('');
    const [ cfrPassword, setCfrPassword ] = useState('');
    const [ development, setDevelopment ] = useState(false);
    const [ websites, setWebsites ] = useState(false);
    
    //Show Errors
    const [ errorPassword, setErrorPassword ] = useState('');
    const [ errorEmail, setErrorEmail ] = useState('');
    const [ errorName, setErrorName ] = useState('');
    const [ errorSurname, setErrorSurname ] = useState('');


    const HandleRegisters = (e: FormEvent) => {
        e.preventDefault();

        if (passwordUsr === cfrPassword) {
            api.post('/user', {
            name,
            surname,
            emailUsr,
            passwordUsr,
            development,
            websites
        })
        .then((response) => {

            history.push('/');
        })
        .catch((err) => {
            
            if(err.response.status === 423) {
                setErrorSurname('')
                setErrorPassword('')
                setErrorName('')
                setErrorEmail('Este email já está em uso')

            }
            if(err.response.status=== 422) {
                const errorsArray: object[] = err.response.data.errors;

                errorsArray.map((item: any) => {
                    if(item.param === 'name'){
                        setErrorSurname('')
                        setErrorEmail('')
                        setErrorPassword('')
                        setErrorName(item.msg)

                    } else if(item.param === 'surname') {
                        setErrorEmail('')
                        setErrorName('')
                        setErrorPassword('')
                        setErrorSurname(item.msg)

                    } else if(item.param === 'emailUsr') {
                        setErrorSurname('')
                        setErrorPassword('')
                        setErrorName('')
                        setErrorEmail(item.msg)

                    } else if(item.param === 'passwordUsr') {
                        setErrorSurname('')
                        setErrorEmail('')
                        setErrorName('')
                        setErrorPassword(item.msg)
                    }
                })
            }

        })
        } else {
            setErrorPassword('As suas senhas não se correspondem');
        }
    }

    return (
        <>
            <Header /> 
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
                                        required
                                    />
                                    <div id="ShowErrors">{errorName}</div>

                                    <Input  
                                        name="surname" 
                                        label="Sobrenome" 
                                        value={surname}
                                        onChange={ (e) => { setSurname(e.target.value) }}
                                    />
                                    <div id="ShowErrors">{errorSurname}</div>

                                    <Input 
                                        name="email" 
                                        label="Endereço de email" 
                                        value={emailUsr}
                                        onChange={ (e) => { setEmail(e.target.value) }}
                                        required
                                    />
                                    <div id="ShowErrors">{errorEmail}</div>

                                    <Input  name="password" 
                                        label="Crie uma senha" 
                                        autoComplete="knew-password"
                                        type="password" 
                                        value={passwordUsr}
                                        onChange={ (e) => { setPassword(e.target.value) }}
                                        required
                                    />
                                    <div id="ShowErrors">{errorPassword}</div>

                                    <Input  name="cfrPassword" 
                                        label="Confirme a senha" 
                                        autoComplete="knew-password"
                                        type="password"
                                        value={cfrPassword}
                                        onChange={ (e) => { setCfrPassword(e.target.value) }}
                                        required
                                    />
                                    <div id="ShowErrors">{errorPassword}</div>

                                </fieldset>

                                <fieldset>
                                    <legend>Porfavor seleciona conteúdo do seu interesse</legend>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Programação"
                                            name="development"
                                            key="development"
                                            checked={development}
                                            onChange={ (e: any) => { setDevelopment(e.target.checked) }}
                                        />

                                        <Form.Check 
                                            type="checkbox" 
                                            label="Websites"
                                            name="websites"
                                            key="websites"
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
            <Footer />
        </>
    )
}

export default SignUp;