import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { WhatsappForm } from '../../components/utilsItem';

import Avatar from '../../assets/images/undraw_profile_pic_ic5t.svg';
import './styles.css';



const UserDada: React.FC = () => {
    const userData: any = useSelector(state => state);

    const { name, surname, emailUsr, development, websites, createdAt } = userData.data;

    let content: string;
    if (websites === true && development === true) {
        content = 'Programação e Websites';
    } else if (development === true) {
        content = 'Programação';
    } else if (websites === true) {
        content = 'Websites';
    } else {
        content = 'Nenhum';
    }
    
    return (
        <>
            <Header /> 
            <Container>
                <Row>
                    <Col sm={{span: 12, offset: 0}} md={{span: 8, offset: 2}}>
                        <legend id="legendData">Seus Dados</legend>

                        <div id="main-blockData">
                            <Row>
                                <Col md={4}>
                                    <Image src={Avatar} alt="avatar" fluid/>
                                </Col>
                                
                                <Col id="userName" md={8} >
                                    <div>{ name } { surname }</div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col md={10}>
                                    <ListGroup id="Lists" variant="flush">
                                        <ListGroup.Item>
                                            E-mail: <span id="a">{emailUsr}</span>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Conteúdo: <span id="b">{content}</span>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Data de inscrição: <span id="c">{createdAt}</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                
                                <Col md={2}>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <WhatsappForm />
            <Footer />
        </>
    )
}


export default UserDada;