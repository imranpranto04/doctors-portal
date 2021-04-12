import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhanbari, Bangaldesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+8801711007007',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (

        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }      
            </div>
        </section>
    );
};

export default BusinessInfo;