import React from 'react';
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import Article from "./article/Article.jsx"

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