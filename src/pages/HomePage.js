import React from 'react';
import Hero from '../component/Hero'

function HomePage(props) {

    return (
        <Hero name={props.name} faculty={props.faculty} subject={props.subject}/> 
    )

}

export default HomePage;