import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { WhatsappForm } from '../../components/utilsItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CTO_Img from '../../assets/images/DSC_5457.jpg';
import BrandStrategist_Img from '../../assets/images/foto.png';
import solutionMindset from '../../assets/images/undraw_solution_mindset_34bi.svg';
import solutionMindset02 from '../../assets/images/apple-business-computer-connection-392018.jpg';

import './styles.css';


const AboutUs = () => {
    return (
        <>
            <Header />
            <Container className="container-block01" fluid="xl">
                <Jumbotron className="main-headerAbout" fluid>
                    <div>
                        <h1>Quem somos?</h1>
                        <p>Realizadores de seus sonhos</p>
                        <hr/>
                    </div>
                </Jumbotron>

                <ul>
                    <li>
                        <div id="header">
                            <Image src={ CTO_Img } alt="CTO" fluid />
                            Arlindo Boa

                            <Button>
                                <Link 
                                    to="https://www.linkedin.com/in/arlindo-boa-23048b1b0/">
                                    Saber mais
                                </Link>
                            </Button>
                        </div>
                        
                        <div>
                            <h1>CTO</h1>
                            Programador e Web designer, apaixonado pelas melhores tecnologias 
                        </div>
                    </li>

                    <li>
                        <div>
                            <Image src={BrandStrategist_Img} alt="Brand strategist" fluid />
                            Açuceno Chiconela

                            <Button>
                                <Link 
                                    to="https://www.linkedin.com/in/acuceno-joao-chiconela-075516b4/"> 
                                    Saber mais
                                </Link>
                            </Button>
                        </div>
                        
                        <div>
                            <h1>Estrategista</h1>
                            Responsável pela estratégia de marketing digital.
                            Gestor de conteúdos
                        </div>
                    </li>
                </ul>
            </Container>
            <Container className="main-block-containerAbout">
                <Row>
                    <Col md={{span: 8, offset: 2}} id="col02">
                        <h1>O que fazemos?</h1>
                        <p>
                            Somos provedores de paginas web através de estratégias integradas de otimização de processos de negócios baseados num
                            estudo exaustivo dos ecossistemas empresariais e aplicação da tecnologia para o engajamento do consumidor.
                        </p>

                        <Row>

                            <Col md={7}>
                                <p>
                                    Mais do que colocar os elementos certos na pagina nossa missão é usar a estratégia certa de modo que os nossos clientes
                                    tenham resultados notáveis
                                </p>
                            </Col>

                            <Col id="porque-dortt" md={5}>
                                <Image src={solutionMindset} alt="Solution mindset" fluid />
                            </Col>

                        </Row>
                    </Col>

                    <Col md={{span: 8, offset: 2}} id="col02">
                        <h1>Porquê a Dortt?</h1>
                        <p>
                            Tudo começa quando entendemos que a criatividade e a inovação tecnológica faz os nossos projetos darem certo.
                        </p>

                        <Row>

                            <Col md={4}>
                                <Image src={solutionMindset02} alt="Solution mindset"  fluid />
                            </Col>

                            <Col md={8}>
                                <p className="pl-4">
                                    <em>
                                        Esteja conectado com seus clientes 24 sobre 24, e não perca mais dinheiro
                                    </em>
                                    
                                    <br/>

                                    Uma única plataforma digital, onde o cliente pode ver o seu catálogo de produtos e serviços, acompanhar o rítmo dos
                                    seus
                                    negócios e solicitar diretamente tudo que precisar sem gastar tempo.
                                </p>
                            </Col>
                        </Row>
                        <p>
                            A Dortt é uma equipe suficientemente organizada para fazer um acompanhamento da sua integração digital, desde a fase da
                            análise do seu negócio, no que concerne ao público alvo, objetivo e principais requisitos, até a criação de uma
                            plataforma robusta, capaz de integrar seus processos ao modo de busca dos clientes e garantir um aumento significativo
                            de vendas.
                        </p>
                    </Col>
                </Row>

                <div className="blocked_for_md">
                    <div id="contentID">
                        <Row>
                            <Col xs={3}>
                                <Image src={ CTO_Img } alt="CTO" fluid />
                            </Col>

                            <Col xs={9}>
                                <h3>CTO</h3>
                                <p>Arlindo Boa</p>
                            </Col>
                        </Row>

                        Programador e Web designer, apaixonado pelas melhores tecnologias 

                        <Button>
                            <Link 
                                to="https://www.linkedin.com/in/arlindo-boa-23048b1b0/">
                                Saber mais
                            </Link>
                        </Button>
                    </div>

                    <div id="contentID">
                        <Row>
                            <Col xs={3}>
                                <Image src={BrandStrategist_Img} alt="Brand strategist" fluid />
                            </Col>
                            
                            <Col xs={9}>
                                <h3>Estrategista</h3>
                                <p>Açuceno Chiconela</p>
                            </Col>
                        </Row>

                        Responsável pela estratégia de marketing digital. Gestor de conteúdos

                        <Button>
                            <Link 
                                to="https://www.linkedin.com/in/acuceno-joao-chiconela-075516b4/"> 
                                Saber mais
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>

            <WhatsappForm />
            <Footer />
        </>
    )
}

export default AboutUs;