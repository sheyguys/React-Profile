import React from 'react';
import Hero from '../component/Hero';
import Contetnt from '../component/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero name={props.name} />
            <Contetnt>Hello Content</Contetnt>
        </div>
    );

}

export default AboutPage;