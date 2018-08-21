import React from 'react';
import './portfolio.scss';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="article__left">
                    <h5>
                        WORK
                    </h5>

                    <div className="article__lines" />

                    <h1>
                        Recent Projects
                    </h1>

                </div>
                
                <div className="article__right">
                    <div className="article__project">
                        <div className="article-project-image1" />
                        
                        <h4>SpaceSuit Application</h4>
                        <p>This concept project I have made for Ukrainian DevChallenge12. The task was to create a mobile application to a multifunctional spacesuit with a bunch of sensors for use in the open space, which would display all the necessary and useful information</p>    

                        <a href="https://www.behance.net/gallery/67192011/SpaceSuit-App" target="_blank">
                            <div className="btn-view">
                                <div className="btn-view-text">VIEW CASE</div>
                            </div>
                        </a>
                        <div className="divider" />
                    </div>

                    <div className="article__project">
                        <div className="article-project-image2" />
                        
                        <h4>Dictionary Concept</h4>
                        <p>This concept project I have made for Ukrainian DevChallenge12. The task was to create a convenient web-dictionary where the user could add unknown words or word expressions, study added words and follow his progress</p>    

                        <a href="https://www.behance.net/gallery/68088317/Dictionary" target="_blank">
                            <div className="btn-view">
                                <div className="btn-view-text">VIEW CASE</div>
                            </div>
                        </a>
                        <div className="divider" />
                    </div>

                    <div className="article__project">
                        <div className="article-project-image3" />
                        
                        <h4>National Art Museum of Ukraine</h4>
                        <p>This concept project I have made for Ukrainian Design: The Very Best Of</p>    

                        <a href="https://www.behance.net/gallery/56399039/National-Art-Museum-of-Ukraine" target="_blank">
                            <div className="btn-view">
                                <div className="btn-view-text">VIEW CASE</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;