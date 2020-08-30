import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm } from '../../components/utilsItem';

import ContentTeamImg from '../../assets/images/undraw_content_team_3epn.svg';
import MindMapImg from '../../assets/images/undraw_Mind_map_re_nlb6.svg';

import './styles.css';



const WebOptimize = () => {
    const dispatch = useDispatch();
    let requestedService = '';

    const HandleStates = () => {
        dispatch({ type: 'USER_ACTIONS', requestedService })
    }

    return (
        <> <Header />
            <div className="main-Optimaze">
                <Container>
                    <Row>
                        <Col md={6} id="Row01-Col01Optimaze">
                            <h1>SEO</h1>
                            <h2>A sua visibilidade é importante nos motores de busca</h2>
                            <p>
                                Tenha a maior visibilidade nos motores de busca e aumente o numero de usuários do teu website.
                            </p>

                            <p>
                                Após a aplicação das nossas técnicas de SEO o teu website estará mais leve e acessível nos motores de busca para que não perca mais visitantes, 
                                aumente a experiência do usuário e melhorar as hipóteses globais que o website será indexado pelos motores de busca.
                            </p>

                            <Button 
                                onClick={
                                    () => {
                                        requestedService = 'Otimização de websites';
                                        HandleStates()
                                    }
                                }
                            >
                                <Link to="/services/contact">
                                    Solicitar cotação
                                </Link>
                            </Button>
                        </Col>

                        <Col md={6}>
                            <Image src={ContentTeamImg} fluid />
                        </Col>
                    </Row>
                    
                </Container>
                
                <Container id="optimaze-Container02" fluid>
                    <Row>
                            <Col md={6}>
                                <Image src={MindMapImg} fluid />
                            </Col>

                            <Col md={6}>
                                <h1>O que é Otimização de Website?</h1>

                                <p>
                                    Também conhecido como Otimização do motor de busca(SEO), a otimização de site é uma frase que descreve
                                    os procedimentos usados para otimizar ou desenhar de raiz um website para classificar bem nos motores de busca.
                                </p>

                                <p>
                                    Otimização de website inclui o processos como adição de palavras e frases relevantes no website, 
                                    adição de meta tags, tags de imagens, e otimização de outros componentes do seu website para para ter se a
                                    certeza que está acessível nos motores de busca.
                                </p>
                            </Col>
                        </Row>
                </Container>

            </div>
            <WhatsappForm />
            <Footer />
        </>
    )
}


export default WebOptimize;
