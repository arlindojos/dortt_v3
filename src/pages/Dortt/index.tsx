import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm } from '../../components/utilsItem';

import webService from '../../assets/images/web-services.png';
import pincel from '../../assets/images/pincel-log.jpg';
import mailMassege from '../../assets/images/mail-masseges.jpg';
import webSite from '../../assets/images/website-in-build.jpg';
import optimzetion from '../../assets/images/optimizetion.jpg';
import digitalMarket from '../../assets/images/digital-market.jpg'

import './styles.css';


const Dortt = () => {
        const dispatch = useDispatch();
        let requestedService = '';

        const HandleStates = () => {
            dispatch({ type: 'USER_ACTIONS', requestedService })
        }

        return (
            <>
                <Header /> 
                <Container className="mt-5">
                    <Row>
                        <Col md={8}>
                            <h3 className="title">Em nossas mãos, seus projetos estão seguros</h3>
                            <p>
                                O nosso sucesso depende do teu sucesso, por isso faça sol, ou chuva, nós estaremos 100% dedicados ao seu
                            projecto. <br />
                            "Uma das melhores coisas da vida é fazer o que gostamos", e nós fazemos isso por amor!
                        </p>
                        </Col>
                        <Col md={4}>
                            <Image src={webService} fluid />
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h2 id="title" className="text-center mb-4">Conheça nossos serviços</h2>
                    <Row>
                        <Col md={3} className="shadowContainer">
                            <div>
                                <div className="mb-3">
                                    <Image src={pincel} fluid />
                                </div>
                                    <p><strong>Criação de logótipos</strong></p>
                                    <p>Seu logótipo é a cara pública da sua marca. Com o objetivo de passar uma ótima impressão a ela criamos design limpo, simples e memorável que transmite a essência da sua marca.</p>
                                <div className="text-center  mb-5">

                                    <Button 
                                        className="Button"
                                        onClick={
                                            () => {
                                                requestedService = 'Criação de logótipos';
                                                HandleStates()
                                            }
                                        }>
                                        <Link to="/services/contact">Solicitar Cotação</Link>
                                    </Button>

                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="shadowContainer">
                            <div>
                                <div className="mb-3">
                                    <Image src={webSite} fluid />
                                </div>
                                <p><strong>Websites e Blogs</strong></p>
                                <p>Criamos páginas perfeitamente preparadas para se adaptar a diferentes dispositivos e telas, como computadores, celulares e tablets e de uso fácil e intuitivo.</p>
                                <div className="text-center  mb-5">

                                    <Button 
                                        className="Button buttonWebsite" 
                                        onClick={
                                            () => {
                                                requestedService = 'Websites e Blogs';
                                                HandleStates()
                                            }
                                        }>
                                        <Link to="/services/contact">Solicitar Cotação</Link>
                                    </Button>

                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="shadowContainer">
                            <div>
                                 <div className="mb-3">
                                    <Image src={mailMassege} fluid />
                                </div>
                                <p><strong>Email profissional</strong></p>
                                <p>Tenha uma ajuda profissional para criar o email da sua empresa e, conquiste a confiança dos seus clientes com um endereço de e-mail profissional com o nome da sua empresa e segurança.</p>
                                <div className="text-center  mb-5">

                                    <Button 
                                        className="Button" 
                                        onClick={
                                            () => {
                                                requestedService = 'Email profissional';
                                                HandleStates()
                                            }
                                        }>
                                        <Link to="/services/contact">Solicitar Cotação</Link>
                                    </Button>

                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="shadowContainer">
                            <div>
                                <div className="mb-3">
                                    <Image src={optimzetion} fluid />
                                </div>
                                <p><strong>Otimização de sites</strong></p>
                                <p>Aumente a sua visibilidade nos motores de pesquisa tipo Google, Sapo ou Bing e pare de perder clientes qualificados. Usamos técnicas assertivas</p>
                                <div className="text-center mb-5">
                                    <Button 
                                        className="Button button-optimize" 
                                        onClick={
                                            () => {
                                                requestedService = 'Otimização de sites';
                                                HandleStates()
                                            }
                                        }>
                                        <Link to="/services/contact">Solicitar Cotação</Link>
                                    </Button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron id="JumbotronID" className="mt-5 pt-5" fluid>
                    <Container fluid>
                        <Row>
                            <Col md={7}>
                                <Image src={digitalMarket} fluid />
                            </Col>
                            <Col md={5}>
                                <h5>Covid-19</h5>
                                <p>Ameaça ou Oportunidade?</p>
                                <p>
                                    Diante desta PANDEMIA, a palavra de ordem é <strong>Fica em casa ...</strong> O que nos resta é trabalhar
                                    online.
                                </p>
                                <p>
                                    Nós, A Dortt facultamos o teu trabalho, ajudando sua empresa a ter sucesso online. Temos tudo o que você
                                    precisa para construir e expandir seus negócios no conforto da tua casa, operacionalizando suas tarefas
                                    cotedianas em uma plataforma digital.
                                </p>
                                <p>
                                    Criamos um site simples ou loja virtual em tempo record e ainda estabelecemos um <strong>Link</strong> com
                                    as melhores
                                    redes sociais para alavancar a sua estratégia de marketing digital...
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <WhatsappForm />
                <Footer />
            </>
        )
}


export default Dortt;