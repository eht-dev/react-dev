import React, {Component} from 'react';


class Partner extends Component {
    render() {
        return (
            <>
                <section className="partners py-5" id="partners">
                    <div className="container py-xl-5 py-lg-3">
                        <h3 className="tittle text-center font-weight-bold">Our Partners</h3>
                        <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut
                            labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div className="row grid-part text-center pt-4">
                            <div className="col-md-2 col-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-angellist"></span></a>
                                    <h4>Angellist</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-opencart"></span></a>
                                    <h4>opencart</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-lastfm"></span></a>
                                    <h4>lastfm</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-4 mt-md-0 mt-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-openid"></span></a>
                                    <h4>openid</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-4 mt-md-0 mt-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-skyatlas"></span></a>
                                    <h4>skyatlas</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-4 mt-md-0 mt-4">
                                <div className="parts-w3ls">
                                    <a href="#"><span className="fa fa-ravelry"></span></a>
                                    <h4>ravelry</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>


        );
    };
};

export default Partner;