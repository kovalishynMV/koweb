import React from 'react';
import Header from "./header/Header.jsx"
import Article from "./article/Article.jsx"
import Footer from "./footer/Footer.jsx"

class About extends React.Component {
    render() {
        return (
            <body className="about-us-page">
                <header className="about-us-page__header">
                    <Header />
                </header>

                <article className="about-us-page__article">
                    <div className="about-us-page__bg" />
                    <Article />
                </article>

                <footer className="about-us-page__footer">
                    <Footer />
                </footer>
            </body>
        );
    }
}

export default About;