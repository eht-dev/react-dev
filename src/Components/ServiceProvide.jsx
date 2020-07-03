import React, {Component} from 'react';
import ServiceProvideCard from "../Components/ServiceProvideCard";
import ServiceProviderData from "./DataArray/AboutCardData";

class ServiceProvide extends Component {
    render() {
        return (
            <>
                <section className="banner-bottom-w3layouts bg-li py-5" id="services">
                    <div className="container py-xl-5 py-lg-3">
                        <h3 className="tittle text-center font-weight-bold">Our Services</h3>
                        <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut
                            labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div className="row pt-lg-4">
                            {
                                ServiceProviderData.map((data, index) => {
                                    return <ServiceProvideCard
                                        key={index}
                                    title={data.title}
                                    desc={data.desc}
                                    marginclass={data.marginclass}

                                    />
                                })
                            }
                        </div>
                    </div>
                </section>

            </>

        );
    };

};

export default ServiceProvide;