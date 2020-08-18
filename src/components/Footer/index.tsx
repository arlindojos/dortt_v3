import React from 'react';

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
                            <a href="/about_us"><strong>Porquê a Dortt?</strong></a>
                            <a href="/services/Websites-and-Blogs">O que é Web Design?</a>
                            <Image src={LogoImg} alt="Dortt" fluid />
                        </div>
                    </Col>

                    <Col md={3} className="footerColon01" >
                        <span><strong>Serviços</strong></span>
                        <a href="/services/Websites-and-Blogs">Website</a>
                        <a href="/services/Websites-and-Blogs">Blog</a>
                        <a href="/services/logos">Logo</a>
                        <a href="/services/websites_blogs">Email Profissional</a>
                        <a href="/Optimize-Your-Website">Otimização de Website</a>
                    </Col>

                    <Col md={3} className="footerColon01">
                        <span><strong>Cliente</strong></span>
                        <a href="/log_in">Sua conta</a>
                        <a href="/sign_up">Inscreva-se</a>
                        <a href="/contact">Ajuda</a>
                    </Col>

                    <Col md={3} className="footerColon01">
                        <span><strong>Empresa</strong></span>
                        <a href="/about_us">Sobre nós</a>
                        <a href="#">Blog</a>
                        <a href="#">Parceiros</a>
                        <a href="/contact">contáctenos</a>
                    </Col>
                </Row>

                <p className="text-right legalLink">
                    <a href="#">
                        Segurança
                    </a>
                </p>

                <Row className="footerRow02">
                    <Col md={6}>
                        <div>
                            <p className="text-light">
                                copyright: &copy <span>{thisYear}</span> dortt.net hrefdos os direihrefs reservados.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} >
                        <div className="text-right socialIcons">
                            <a href="#">
                                <i className="fa fa-facebook    "></i>
                            </a>

                            <a href="#">
                                <i className="fa fa-linkedin    "></i>
                            </a>

                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=258844444689">
                                <i className="fa fa-whatsapp    "></i>
                            </a>

                            <a href="https://www.instagram.com/dortt.net_oficial/">
                                <i className="fa fa-instagram    "></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;