import React from 'react';
import Banner from './Components/Banner';
import About from './Components/About';
import Service from './Components/Service';
import ServiceProvide from './Components/ServiceProvide';
import Partner from './Components/Partner';
import Footer from './Components/Footer';
import './css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/style.css';

import './images/inner.jpg';


const App = () => {
    return (
        <>
            <Banner/>
            <About/>
            <Service/>
            <ServiceProvide/>
            <Partner/>
            <Footer/>
        </>
    );
};

export default App;
