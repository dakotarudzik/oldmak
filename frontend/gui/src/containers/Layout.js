import React from 'react';
import $ from 'jquery';
import { Layout } from 'antd';
import MakLogo from '../assets/MakLogo.png';
import { NavLink, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


class CustomLayout extends React.Component {
// Before Production, Integrate Animations Directly into JQuery
    componentDidMount() {
        $('#underline').css("width", $('.active-link').width());
        $('#underline').css("left", $(".active-link").position().left);
        $('#underline').css("display", "absolute");

        $('#header-nav a').click(function() {
            $('#underline').css("width", $(this).width());
            $('#underline').css("left", $(this).position().left);
        });
        
        $( window ).resize(function(){
            $('#underline').css("display", "none");
            $('#underline').css("width", $('.active-link').width());
            $('#underline').css("left", $(".active-link").position().left);
            $('#underline').css("display", "absolute");
        });
        
    }

    render(){
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo">
                        <Link to="/"><img src={MakLogo} /></Link>
                    </div>
                    <ul id='header-nav'>
                        <NavLink id='gallery-link' to='/gallery' exact activeClassName='active-link' >Gallery</NavLink>
                        <NavLink id='about-link' to='/about' exact activeClassName='active-link' >About</NavLink>
                        <NavLink to='/resources' exact activeClassName='active-link' >Resources</NavLink>
                        <NavLink to='/contact' exact activeClassName='active-link' >Contact</NavLink>
                        
                    </ul>
                    
                </Header>
                <div className="full-cont">
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ minHeight: 280 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a condimentum magna.</h5>
                        <h4>MaKenzie Walck &copy; 2020</h4>
                    </Footer>
                </div>
            </Layout>
        );
   } 
}

export default CustomLayout;
