import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';

import opened_gi4n from '../../assets/images/undraw_opened_gi4n.svg';

import './styles.css';



const MailService = () => {
    return (
        <div className="main-Mail">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1>Sua empresa estará melhor do que nunca.</h1>
                            <p>
                                Tenha uma ajuda profissional para criar o email da sua empresa e, conquiste a confiança dos seus
                                clientes com um endereço de e-mail profissional com o nome da sua empresa e garantia de
                                segurança.
                            </p>
                            <div>
                                <Button className="mailButton">
                                    <Link  to="/services/contact">
                                        E-mail profissional
                                    </Link>
                                </Button>
                            </div>
                        </Col>

                        <Col md={3} sm={false}>
                            <Image 
                                src={opened_gi4n} 
                                alt="Tenha um email profissional" 
                                fluid 
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default MailService;