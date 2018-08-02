import React from 'react';
import './header.scss';
import logo from './img/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    
                </div>

                <ul class="header__menu">
                    <li><a href="">WORK</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>

            </header>
        );
    }
}

export default Header;