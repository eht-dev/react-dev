import  React from 'react';

const ServiceProvideCard = (props) =>{
    return (
        <>
            <div className={`col-lg-4 about-in text-center ${props.marginclass}`}>
                <div className="card">
                    <div className="card-body">
                        <div className="bg-clr-w3l">
                            <span className="fa fa-line-chart"></span>
                        </div>
                        <h5 className="card-title mt-4 mb-3">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            </div>
            </>

    );
};

export default ServiceProvideCard