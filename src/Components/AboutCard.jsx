import React from 'react';

const About = (props) => {
    return (
        <>
            <div className={`col-lg-4 about-grid ${props.marginclass}`}>
                <div className="about-grid-main">
                    <img src={props.imgsrc} alt={props.imgsrc} className="img-fluid"/>
                    <h4 className="my-4">{props.title}</h4>
                    <p> {props.desc}</p>
                    <a href="about.html" className="button-w3ls btn mt-sm-5 mt-4">Read More</a>
                </div>
            </div>

        </>
    );

};

export default About;
