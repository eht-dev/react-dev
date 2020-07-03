import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-li py-5">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="subscribe mx-auto">
                            <div className="icon-effect-w3">
                                <span className="fa fa-envelope"></span>
                            </div>
                            <h2 className="tittle text-center font-weight-bold">Stay Updated!</h2>
                            <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut
                                labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <form action="#" method="post" className="subscribe-wthree pt-2">
                                <div className="d-flex subscribe-wthree-field">
                                    <input className="form-control" type="email" placeholder="Enter your email..."
                                           name="email" required=""/>
                                    <button className="btn form-control w-50" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
                <div className="copy-bottom bg-li py-4 border-top">
                    <div className="container-fluid">
                        <div className="d-md-flex px-md-3 position-relative text-center">
                            <div className="social-icons-footer mb-md-0 mb-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-google-plus"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="copy_right mx-md-auto mb-md-0 mb-3">
                                <p className="text-bl let">© 2019 Startup. All rights reserved | Design by
                                    <a href="javascript:void(0)">treework</a>
                                </p>
                            </div>

                            <a href="#home" className="move-top text-center">
                                <span className="fa fa-level-up" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </>
        );
    };
};

export default Footer;