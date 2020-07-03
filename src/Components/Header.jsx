import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">

                        <div id="logo">
                            <h1><a href="index.html"><span className="fa fa-linode mr-2"></span>Startup</a></h1>
                        </div>

                        <div className="nav_w3ls">
                            <nav>
                                <label htmlFor="drop" className="toggle">Menu</label>
                                <input type="checkbox" id="drop"/>
                                <ul className="menu">
                                    <li><a href="javascript:void(0)" className="active">Home</a></li>
                                    <li><a href="javascript:void(0)">About Us</a></li>
                                    <li><a href="javascript:void(0)">Pricing</a></li>
                                    <li>

                                        <label htmlFor="drop-2" className="toggle toogle-2">Dropdown <span
                                            className="fa fa-angle-down" aria-hidden="true"></span>
                                        </label>
                                        <a href="#">Dropdown <span className="fa fa-angle-down"
                                                                   aria-hidden="true"></span></a>
                                        <input type="checkbox" id="drop-2"/>
                                        <ul>
                                            <li><a href="javascript:void(0)" className="drop-text">Services</a></li>
                                            <li><a href="javascript:void(0)" className="drop-text">Faq's</a></li>
                                            <li><a href="javascript:void(0)" className="drop-text">404</a></li>
                                            <li><a href="javascript:void(0)" className="drop-text">Statistics</a></li>
                                            <li><a href="javascript:void(0)" className="drop-text">Why Choose Us?</a>
                                            </li>
                                            <li><a href="javascript:void(0)" className="drop-text">Our Team</a></li>
                                            <li><a href="javascript:void(0)" className="drop-text">Partners</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export  default  Header;