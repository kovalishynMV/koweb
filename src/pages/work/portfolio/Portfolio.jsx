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
                        <p>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have</p>

                        <div className="btn-view">
                            <div className="btn-view-text">VIEW CASE</div>
                        </div>

                        <div className="divider" />
                    </div>

                    <div className="article__project">
                        <div className="article-project-image2" />
                        
                        <h4>Dictionary Concept</h4>
                        <p>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have</p>

                        <div className="btn-view">
                            <div className="btn-view-text">VIEW CASE</div>
                        </div>

                        <div className="divider" />
                    </div>


                    <div className="article__project">
                        <div className="article-project-image3" />
                        
                        <h4>Museum Redesign Concept</h4>
                        <p>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have</p>

                        <div className="btn-view">
                            <div className="btn-view-text">VIEW CASE</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Portfolio;