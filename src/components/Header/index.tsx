import React, {Component} from 'react';

import logop from '../../assets/images/logop.svg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './styles.css'


export default class Header extends Component {
    state = {
        ScreenNav:'',
    }
    
    mobileMenu = () => {
        const active = this.state.ScreenNav;

        if (active === 'openNav') {

            this.setState({ ScreenNav: 'closeNav' });
        } else {
           
            this.setState({ ScreenNav: 'openNav' });
        }
    }

    render () {
        const Active = this.state.ScreenNav;

        return (
            <header id='main-header'>
                <div className="mobileContent" onClick={this.mobileMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="DivNav-SpaceBetween">
                    <div className="logoDiv">
                        <Image src={logop} fluid />
                    </div>
                    <ul className={Active} id="Nav_ulLists">
                        <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i> Pagina inicial</a></li>
                        <li id="Dropdown_Services">
                            <a className="Dropdown-button" href="#">Serviços <i className="fas fa-caret-down"></i></a>
                            <div className="DropdownContent">
                                <a href="/services/websites_blogs">Websites e Blogs</a>
                                <a href="#Email profissional">Email profissional</a>
                                <a href="/services/logos">logótipos</a>
                                <a href="#Otimização de sites">Otimização de sites</a>
                            </div>
                        </li>
                        <li><a href="/sign_up">Inscreva-se</a></li>
                        <li><a href="/about_us">Sobre-nós</a></li>
                        <li><Button><a href="/contact">Contactos</a></Button></li>
                    </ul>
                </div>
            </header>
        )
    }
}
