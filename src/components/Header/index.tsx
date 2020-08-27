import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import logop from '../../assets/images/logo_v3.svg';
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
                        <li>
                            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Pagina inicial</Link>
                        </li>
                        
                        <li id="Dropdown_Services">
                            <Link className="Dropdown-button" to="#">Serviços <i className="fas fa-caret-down"></i></Link>
                            
                            <div className="DropdownContent">
                                <Link to="/services/Websites-and-Blogs">Websites e Blogs</Link>
                                <Link to="/services/logos">Email profissional</Link>
                                <Link to="/services/logos">logótipos</Link>
                                <Link to="/services/Optimize-Your-Website">Otimização de sites</Link>
                            </div>
                        </li>

                        <li>
                            <Link to="/log_in"><i className="fas fa-user-alt"></i> Log-In</Link>
                        </li>

                        <li>
                            <Link to="/about_us">Sobre-nós</Link>
                        </li>

                        <li>
                            <Button><Link to="/contact"><i className="fab fa-teamspeak"></i> Contactos</Link></Button>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
