import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContactForm from './contact-form/ContactForm';

class Contact extends React.Component {
    render() {
        return (
            <body className="contact-page">
                <header className="contact-page__header">
                    <Header />  
                </header>

                <article className="contact-page__contact-form">
                    <ContactForm />
                </article>

                <footer className="contact-page__footer">
                    <Footer />
                </footer>

            </body>
        );
    }
}

export default Contact;