import React from 'react';
import './header.scss';
import logo from './img/logo.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo" >
                    
                </div>

                <ul class="header__menu">
                    <li><Link to="/work">WORK</Link></li>
                    <li><Link to="/">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>

            </header>
        );
    }
}

export default Header;