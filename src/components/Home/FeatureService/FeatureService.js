import React from 'react';
import feature from '../../../images/feature.png'

const FeatureService = () => {
    return (
        <section className=" container d-flex justify-content-center mt-5">
            <div className="row my-5">
                <div className="col-md-5 ">
                    <img className="img-fluid" src={feature} alt=""/>
                </div>
                <div className="col-md-7 my-5 p-4">
                    <h1 style={{ color: '#3A4154'}}>Exceptional Dental <br/> Cares, on Your Terms.</h1>
                    <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta odio accusantium sed ea praesentium amet voluptatibus, fugiat ex cum aut fugit minima earum ipsa. Odit voluptatum voluptatibus aliquam illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta odio accusantium sed ea praesentium amet voluptatibus, fugiat ex cum aut fugit minima earum ipsa. Odit voluptatum voluptatibus aliquam illum?
                    Cumque soluta odio accusantium sed ea praesentium amet voluptatibus, fugiat ex cum aut fugit minima earum ipsa.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;