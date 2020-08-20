import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import LongText from '../../components/wesites_BlogsLongText';
import { WhatsappForm, AlertMail  } from '../../components/utilsItem';
import MailService from '../../components/MailItem';

import macbookImg from '../../assets/images/apple-desk-laptop-macbook.png';
import macbookImg02 from '../../assets/images/Carrosel1.png';
import WebsiteOnManyDevices from '../../assets/images/devices-flourish.jpg';
import WebsiteExample from '../../assets/images/Conheça-nossos-websites.jpg';
import theBossImg from '../../assets/images/theBoss.png';

import './styles.css';


const WebsitesBlogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={7} className="WebsitesBlogs_Row01_Col01">
                        <h4>Websites e Blogs</h4>
                        <p className="mt-5">
                            Temos páginas perfeitamente preparadas para se adaptar a diferentes dispositivos e telas, como computadores, celulares e
                            tablets. Criamos pensando no seu negocio ou projeto.
                        </p>

                        <div className="button-website">
                            <Button id="Button">
                                <a href="/services/contact">Criar site</a>
                            </Button>
                        </div>
                    </Col>

                    <Col md={5}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={macbookImg}
                                alt="Websites"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={macbookImg02}
                                alt="Websites"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={3} className="shadowContainer">
                        <p className="descriptionTitle">Fácil e intuitivo</p>
                        <p>
                            Escolha o tema relacionado ao seu projeto, informações da sua empresa, produtos e serviços e
                            imagens, nos trabalhamos o seu Website.
                        </p>
                    </Col>

                    <Col md={3} className="shadowContainer">
                        <p className="descriptionTitle">Contas de E-mail</p>
                        <p>
                            Crie contas de e-mail profissional e personalizadas com seu domínio, mais credibilidade ao seu
                            negócio,
                            juntamente com
                            seu site.
                        </p>
                    </Col>

                    <Col md={3} className="shadowContainer">
                        <p className="descriptionTitle">Modelos Responsivo</p>
                        <p>
                            Páginas perfeitamente preparadas para se adaptar a diferentes dispositivos e telas, como computadores,
                            celulares e tablets.
                        </p>
                    </Col>

                    <Col md={3} className="shadowContainer">
                        <p className="descriptionTitle">Presença online</p>
                        <p>
                            Tudo que você precisa no mesmo lugar: criação e otimização de sites, contas de e-mail profissional,
                            infraestrutura robusta e
                            segurança.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <LongText />

                        <div>
                            <Image src={WebsiteOnManyDevices} alt="Websites que se adequa a qualquer dispositivo" fluid />
                        </div>

                        <AlertMail />
                    </Col>

                    <Col md={5}>
                        <Image 
                            className="mt-4" 
                            src={WebsiteExample}
                            alt="Conheça nosso marca e nossos produtos" 
                            fluid 
                        />
                        <div className="servicesButtons mt-5">
                            <Button>
                                <Link  to="/services/contact">
                                    Criar Website
                                </Link>
                            </Button>

                            <Button>
                                <Link  to="/services/contact">
                                    E-mail profissional
                                </Link>
                            </Button>

                            <Button>
                                <Link  to="/services/contact">
                                    Otimização de sites
                                </Link>
                            </Button>

                            <Button>
                                <Link  to="/services/contact">
                                    Serviço de Logos
                                </Link>
                            </Button>
                        </div>
                        <Image src={theBossImg} alt="Websites no tablet" fluid />
                    </Col>
                </Row>
            </Container>
            <div id="email-profissional"></div>
            <MailService />
            
            <WhatsappForm />
        </div>
    )
}

export default WebsitesBlogs;