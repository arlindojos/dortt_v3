import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm, AlertMail } from '../../components/utilsItem';
import MailService from '../../components/MailItem';

import DesignNow from '../../assets/images/DesignNow.jpg';
import DesignImg from '../../assets/images/Vector23.jpg';
import DesignerIgm from '../../assets/images/Pro-designer.svg';
import DesignImg02 from '../../assets/images/240_F_121417264_CORbaKLIRVP2w03wBUKDVwzioyGDtSdv.jpg';

import './styles.css';


const Logos = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={7} className="LogoRow01Col01">
                        <Image src={DesignNow} alt="Design" fluid />
                        <div id="logos-Buttons">
                            <Button>
                                <Link to="/services/contact" >Criar Website</Link>
                            </Button>
                            <Button>
                                 <Link to="/services/contact" >E-mail profissional</Link>
                            </Button>

                            <Button>
                                <Link to="/services/contact" >Otimização de sites</Link>
                            </Button>

                            <Button>
                                <Link to="/services/contact" >Fazer um Logo</Link>
                            </Button>
                        </div>

                        <Container>
                            <Row>
                                <Col md={6}>
                                    <AlertMail />
                                </Col>
                            </Row>
                        </Container>

                    </Col>

                    <Col md={5}>
                        <div className="LogoRow01Col02">
                            <h1>O que é Web design e porquê você precisa de um?</h1>
                            <p>
                                O web design é uma extensão da prática do design gráfico, onde o foco do projeto é a criação de web sites e documentos disponíveis no ambiente da World Wide Web.
                            </p>
                            <p>
                                A preocupação fundamental do web designer é agregar os conceitos de usabilidade e experiência do usuário ao design do site, garantindo que o usuário final atinja seus objetivos de forma agradável e intuitiva.
                            </p>
                            <p>
                                Tem um website, mas ele não transmite a mensagem que o seu negocio quer que chegue aos seus usuários ou não agrega os conceitos de usabilidade e experiência do usuário? Então esse é o momento de nos 
                                <Link to="/services/contact">
                                    <span>
                                        <i className="fas fa-angle-double-right"></i>
                                    </span>
                                    contactar
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={7} className="Logo-Row02-Col01">
                        <Image src={DesignImg} alt="Design" fluid />

                        <div>
                            <Image 
                                src={DesignImg02} 
                                alt="Logo para qualquer tamanho" fluid 
                            />
                        </div>

                        <p>
                            Seu logótipo é a cara pública da sua marca, então ele precisa passar uma ótima impressão. Para isso criamos design limpo, simples e memorável que transmite a essência da sua marca.
                        </p>
                    </Col>

                    <Col md={5} className="Logo-Row02-Col02">
                        <Jumbotron>
                            <Image 
                                src={DesignerIgm}
                                alt="Produzimos juntos" 
                                fluid 
                            />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            
            <div id="email-profissional"></div>
            <MailService />

            <WhatsappForm />
            <Footer />
        </>
    )
}

export default Logos;