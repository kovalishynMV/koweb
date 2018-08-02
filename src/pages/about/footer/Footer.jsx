import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul class="footer__menu_left">
                    <li><a href="">WORK</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>

                <ul class="footer__menu_right">
                    <li><a href="">DRIBBBLE</a></li>
                    <li><a href="">BEHANCE</a></li>
                    <li><a href="">INSTAGRAM</a></li>
                    <li><a href="">LINKEDIN</a></li>
                </ul>

                <div className="footer__caption">
                    <caption>
                        © 2018 Maksym Kovalishyn. Ukrainian UI/UX Designer
                    </caption>
                </div>
            </div>
        );
    }
}

export default Footer;