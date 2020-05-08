import React from 'react';
import '../About.css';
import facebookBlk from '../assets/facebookBlk.png';
import instagramBlk from '../assets/instagramBlk.png';
import linkedinBlk from '../assets/linkedinBlk.png';

class About extends React.Component {
    render() {
        return (
            <div className="about-layout">
                <div className="about-textbox">
                    <h1>About Me:</h1>
                    <h3> Praesent lobortis pretium facilisis. Praesent ac eleifend turpis, ac volutpat sapien. Nam a bibendum leo. 
                        Donec convallis tincidunt odio, a placerat nunc tempus at. Nunc imperdiet congue mattis. Proin cursus eleifend 
                        metus, sit amet ullamcorper sem lacinia ac. Praesent sagittis pretium leo, eu finibus ligula scelerisque eu. 
                        Nam condimentum dui sed elit elementum convallis. Morbi facilisis ligula et nibh dapibus, eu ullamcorper nisl 
                        feugiat. Sed consectetur semper enim, sed cursus leo maximus a. Sed interdum, tellus ullamcorper auctor sagittis, 
                        dolor dolor vulputate magna, in feugiat quam enim ac tellus. Aliquam erat volutpat. Cras faucibus euismod mauris, 
                        ut lobortis nunc sollicitudin porta. Nunc eu neque purus. Pellentesque luctus sem quis libero viverra euismod. </h3>
                </div>
                <div className="about-contact">
                    <h1>Join My Mailing List:</h1>
                    <form>
                        <input htmlType="email" id="email" placeholder="E-mail..."/>
                        <input htmlType="submit" id="submit-email" type="submit" value="Join"/>
                    </form>
                    <div className="about-soc-title">
                        <h2>Social Media</h2>
                        <hr />
                    </div>
                    <div className="about-soc-links">
                        <ul className="about-list">
                            <img src={facebookBlk}/>
                            <img src={instagramBlk}/>
                            <img src={linkedinBlk}/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;