import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from 'react-bootstrap/esm/Alert';
import Button from 'react-bootstrap/esm/Button';

import './styles.css';


export const WhatsappForm = () => {
    return (
        <div className="whatsappForm">
            <a href={`https://api.whatsapp.com/send?1=pt_BR&phone=258844444689`}>
                <div id="whatsappId">
                    <i className="fab fa-whatsapp"></i>
                </div>
            </a>
        </div>
    )
}


export const AlertMail = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
       <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            <p className="AlertMail">
                Precisa de um email Profissional? 
                <Link to="/email-profissional">

                    <span>
                        <i className="fas fa-angle-double-right"></i>
                    </span>
                    Saber mais
                </Link>
            </p>
        </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}