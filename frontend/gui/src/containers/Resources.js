import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Resources.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tutorials from './Tutorials';
import Blog from './Blog';
import Supplies from './Supplies';

class Resources extends React.Component {
    render() {
        return (
            <div className="resources-layout">
                <div className="resources-nav">
                    <ul className="resources-nav-links">
                        <NavLink activeClassName="res-active" exact to="/resources/tutorials">Tutorials</NavLink>
                        <NavLink activeClassName="res-active" exact to="/resources/blog">Blog</NavLink>
                        <NavLink activeClassName="res-active" exact to="/resources/supplies">Supplies</NavLink>
                        <span className="res-underline"></span>
                    </ul>
                </div>
                
                {this.props.children}
            </div>
        )
    }
}

export default Resources;