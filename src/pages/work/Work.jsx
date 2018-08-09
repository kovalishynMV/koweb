import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Portfolio from './portfolio/Portfolio';

class Work extends React.Component {
    render() {
        return (
            <body className="work-page">
                <header className="work-page__header">
                    <Header />  
                </header>

                <article className="work-page__contact-form">
                    <Portfolio />
                </article>

                <footer className="work-page__footer">
                    <Footer />
                </footer>

            </body>
        );
    }
}

export default Work;