import React from 'react';
import Hero from '../component/Hero'
import Carousel from '../component/Carousel';

function HomePage(props) {

    return (
        <div>
            <Hero name={props.name} faculty={props.faculty} subject={props.subject} />
            <Carousel />
        </div>
    )

}

export default HomePage;