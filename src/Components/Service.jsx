import React, {Component} from 'react';
import ServiceImg from '../images/b1.png';

import ServiceData from './DataArray/ServiceData';

class Service extends Component {
    render() {
        return (
            <>

                <section className="midd-w3 py-5" id="faq">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="row">
                            <div className="col-lg-6 about-right-faq">

                                {
                                    ServiceData.map((data, index) => (
                                        <div key={index}>
                                            <h6 >{data.slug}</h6>
                                            < h3 className={`text-da`}>{data.title}</h3>
                                            <p className="mt-4">{data.desc}</p>
                                        </div>
                                    ))
                                }
                                <ul className="w3l-right-book mt-4">
                                    <li>Marketing Base</li>
                                    <li>Financial Consulting</li>
                                    <li>Investment Advice</li>
                                    <li>Business Growth</li>
                                    <li>Technical Support</li>
                                </ul>
                                <a href="about.html" className="btn button-style button-style-2 mt-sm-5 mt-4">Read
                                    More</a>
                            </div>
                            <div className="col-lg-6 left-wthree-img text-right">
                                <img src={ServiceImg} alt={ServiceImg} className="img-fluid mt-5"/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    };
};
export default Service;