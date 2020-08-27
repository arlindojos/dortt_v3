import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import LogoImg from '../../assets/images/logo_v3.svg';

import './styles.css';



const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    <Col md={3} className="footerColon01">
                        <div>
                            <Link to="/about_us">
                                <strong>Porquê a Dortt?</strong>
                            </Link>

                            <Link to="/services/Websites-and-Blogs">
                                O que é Web Design?
                            </Link>

                            <Link to="/services/Optimize-Your-Website">
                                O que é Optimização de Website?
                            </Link>
                            
                            <Image src={LogoImg} alt="Dortt" fluid />
                        </div>
                    </Col>

                    <Col md={3} className="footerColon01" >
                        <span><strong>Serviços</strong></span>
                        <Link to="/services/Websites-and-Blogs">Website</Link>
                        <Link to="/services/Websites-and-Blogs">Blog</Link>
                        <Link to="/services/logos">Logo</Link>
                        <Link to="/services/logos">Email Profissional</Link>
                        <Link to="/Optimize-Your-Website">Otimização de Website</Link>
                    </Col>

                    <Col md={3} className="footerColon01">
                        <span><strong>Cliente</strong></span>
                        <Link to="/log_in">Sua conta</Link>
                        <Link to="/sign_up">Inscreva-se</Link>
                        <Link to="/contact">Ajuda</Link>
                    </Col>

                    <Col md={3} className="footerColon01">
                        <span><strong>Empresa</strong></span>
                        <Link to="/about_us">Sobre nós</Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Parceiros</Link>
                        <Link to="/contact">contáctenos</Link>
                    </Col>
                </Row>

                <p className="text-right legalLink">
                    <Link to="#">
                        Segurança
                    </Link>
                </p>

                <Row className="footerRow02">
                    <Col md={6}>
                        <div>
                            <p className="text-light">
                                copyright: &copy <span>{thisYear}</span> dortt.neLink todos os dirLinkitos reservados.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} >
                        <div className="text-right socialIcons">
                            <Link to="#">
                                <i className="fa fa-facebook    "></i>
                            </Link>

                            <Link to="#">
                                <i className="fa fa-linkedin    "></i>
                            </Link>

                            <Link to="https://api.whatsapp.com/send?1=pt_BR&phone=258844444689">
                                <i className="fa fa-whatsapp    "></i>
                            </Link>

                            <Link to="https://www.instagram.com/dortt.net_oficial/">
                                <i className="fa fa-instagram    "></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;