import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import MailSentImg from '../../assets/images/undraw_Mail_sent_re_0ofv.svg';
import './styles.css';



const GotService = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image src={MailSentImg} fluid />
                    </Col>

                    <Col md={7}>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GotService;