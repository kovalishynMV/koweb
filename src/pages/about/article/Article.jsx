import React from 'react';
import './article.scss';

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="article__left">
                    <h5>
                        ABOUT
                    </h5>

                    <div className="article__lines" />

                    <h1>
                        Kovalishyn Maksym
                    </h1>

                </div>
                <div className="article__right">
                    <p>
                    I am an innovative award-winning UI / UX Designer with more than 3 years of commercial experience in big companies with more than 200 employees and small startups. I have a passion for new design techniques and methodologies and also I am a winner of DevChallenge12 in Pro Web-Design Category.
                    <p>&nbsp;</p>

As UI/UX Designer, I have experience in creating an entirely new style guide from scratch (color selection, typography etc.) and using the existing one, creating of customer journey maps, user personas, information architectures and so on.
<p>&nbsp;</p>

We will make your product perfect together!
                    </p>
                </div>
            </div>
        );
    }
}

export default Article;