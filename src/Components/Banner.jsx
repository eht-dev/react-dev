import React, {Component} from 'react';
import BannerImg from '../images/banner.png';
import Shape from './DataArray/BannerImgShape';
import Header from '../Components/Header';
class Banner extends Component {
    render() {
        return (
            <>
                <div className="main-top" id="home">
                   <Header/>
                    <div className="banner_w3lspvt position-relative">
                        <div className="container">
                            <div className="d-md-flex">
                                <div className="w3ls_banner_txt">
                                    <h3 className="w3ls_pvt-title">Business <br/><span>Startup</span></h3>
                                    <p className="text-sty-banner">Sed ut Ehtesham nasim omnis iste natus doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                        quasi.</p>
                                    <a href="about.html" className="btn button-style mt-md-5 mt-4">Read More</a>
                                </div>
                                <div className="banner-img">
                                    <img src={BannerImg} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="icon-effects-w3l">
                            {Shape.map((shape, index) => (
                                <img key={index} src={shape.src} alt=""
                                     className={`img-fluid shape-wthree shape-w3-${shape.name}`}/>
                            ))}
                        </div>
                    </div>
                </div>

            </>
        )
    }
};

export default Banner;