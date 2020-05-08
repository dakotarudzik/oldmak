import React from 'react';
import Cards from '../components/Cards';
import '../Gallery.css';

import img1 from "../assets/goofyRobo.jpg";
import img2 from "../assets/bern.jpg";
import img3 from "../assets/hand.jpg";

class Gallery extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {

        return (
            <div>
                <Cards elements={ [{src: img3, hgt: '450px'}, {src: img1, hgt: '600px'}, {src: img2, hgt: '100px'}, {src: img3, hgt: "200px"}] } />
            </div>
        )
    }
}

export default Gallery;