import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Dental></Dental>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;