import React from 'react';
import '../Contact.css';

class Contact extends React.Component {
 
    render() {
        return (
            <div className="contact-layout">
                <div className="contact-textbox">
                    <h1>My Services</h1>
                    <hr />
                    <h3> Praesent lobortis pretium facilisis. Praesent ac eleifend turpis, ac volutpat sapien. Nam a bibendum leo. 
                        Donec convallis tincidunt odio, a placerat nunc tempus at. Nunc imperdiet congue mattis. Proin cursus eleifend 
                        metus, sit amet ullamcorper sem lacinia ac. Praesent sagittis pretium leo, eu finibus ligula scelerisque eu. 
                        Nam condimentum dui sed elit elementum convallis. Morbi facilisis ligula et nibh dapibus, eu ullamcorper nisl 
                        feugiat. Sed consectetur semper enim, sed cursus leo maximus a. Sed interdum, tellus ullamcorper auctor sagittis, 
                        dolor dolor vulputate magna, in feugiat quam enim ac tellus. Aliquam erat volutpat. Cras faucibus euismod mauris, 
                        ut lobortis nunc sollicitudin porta. Nunc eu neque purus. Pellentesque luctus sem quis libero viverra euismod.</h3>
                        
                        <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mauris fermentum, placerat dolor in, fermentum 
                        mauris. Aliquam suscipit eleifend ligula ac ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Fusce venenatis, erat sit amet condimentum convallis, metus nulla interdum tellus, vel dictum magna lacus vitae augue. 
                        Vestibulum malesuada orci quis risus pulvinar porttitor. Donec imperdiet ultricies massa, sit amet aliquet nulla dictum 
                        ut. Proin fermentum mi mauris, sit amet rutrum leo porttitor sed. Nam viverra ligula diam, quis sagittis dui dictum et. 
                        Nulla nec turpis vel lacus vestibulum dictum vel sit amet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque libero metus, consectetur nec erat eget, cursus viverra orci. Aenean elementum massa id orci fringilla, id consequat 
                        dui ultricies. </h3>
                </div>
                <div className="contact-box">
                    <div className="contact-title">
                        <h1>Contact Form</h1>
                        <hr />
                    </div>
                    <form className="contact-form">
                        <input type="text" name="fname" id="fname" placeholder="First Name" />
                        <input type="text" name="lname" id="lname" placeholder="Last Name" />
                        <input type="email" htmlType="email" name="email" id="email" placeholder="E-mail" />
                        <input type="tel" htmlType="tel" name="mobile" id="mobile" placeholder="Phone Number" />
                        <textarea id="message" name="message" placeholder="Enter your message here..."/>
                        <input type="submit" htmlType="submit" name="submit" id="submit" value="Submit"/>
                        


                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;