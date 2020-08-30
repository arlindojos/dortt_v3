import React from 'react';

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
    return (
        <div className="robot-notify">
            <div id="robot">
                <i className="fas fa-robot"></i>
            </div>
            
            <div id="robot-dot"></div>
            <div id="robot-message">
                <span>
                Precisa de um 
                <a href="#email-profissional">
                    <i className="fas fa-angle-double-right"></i>
                    email Profissional?
                </a>
            </span>
            </div>
        </div>
    );
}