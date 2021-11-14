import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;