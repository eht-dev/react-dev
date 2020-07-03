import React, {Component} from 'react';
import AboutCardData from './DataArray/AboutCardData';
import AboutCard from '../Components/AboutCard';


export default class About extends Component {
    render() {
        return (
            <>
                <div className="what bg-li py-5" id="what">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="row about-bottom-w3l text-center mt-4">
                            {
                                AboutCardData.map((data, index) => {
                                    return <AboutCard
                                        key={index}
                                        imgsrc={data.imgsrc}
                                        title={data.title}
                                        desc={data.desc}
                                        marginclass={data.marginclass}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

