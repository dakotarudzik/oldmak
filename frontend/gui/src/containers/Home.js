import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Home.css';
import MakLogo from '../assets/MakLogo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

class Home extends React.Component {
    render() {
        return (
            <div className="home-layout">
                <div className="home-background-wrapper">
                    <div className="home-header">
                        <div className="home-logo">
                            <img src={MakLogo} />
                        </div>
                        <ul className="home-nav">
                            <NavLink to='/gallery'>Gallery</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/resources'>Resources</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </ul>
                    </div>
                    <div className="home-content">
                        <div className="jumbo-txt">
                            <h1>The Art Walck</h1>
                            <hr />
                            <h2>Walk Through Fields of Color</h2>

                        </div>
                        <div className="home-gal-btn">
                            <Link to="/gallery"><button >View Gallery</button></Link>
                        </div>
                        <div className="home-social">
                            <div className="home-soc-inner">
                                <img src={facebook} />
                                <img src={instagram} />
                                <img src={linkedin} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-footer">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a condimentum magna.</h5>
                    <h4>MaKenzie Walck &copy; 2020</h4>
                </div>
            </div>
        )
    }
}

export default Home;