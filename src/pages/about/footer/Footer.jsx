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
                    <li><a href="https://dribbble.com/KovalishynMV" target="_blank">DRIBBBLE</a></li>
                    <li><a href="https://www.behance.net/kovalishynMV" target="_blank">BEHANCE</a></li>
                    <li><a href="https://www.instagram.com/m.yankovskiy/" target="_blank">INSTAGRAM</a></li>
                    <li><a href="https://www.linkedin.com/in/maksym-kovalishyn-46047710b/" target="_blank">LINKEDIN</a></li>
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