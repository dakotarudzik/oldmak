import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

import './App.css';
// import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import About from './containers/About';
import Gallery from './containers/Gallery';
import Resources from './containers/Resources';
import Contact from './containers/Contact';
import Tutorials from './containers/Tutorials'
import Blog from './containers/Blog'
import Supplies from './containers/Supplies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <CustomLayout>
            <Route path='/gallery/' exact component={Gallery} />
            <Route path='/about/' exact component={About} />
            <Route path='/resources/'  component={Resources} />
            <Route path='/contact/' exact component={Contact} />
          </CustomLayout>
          <Resources>
            <Route path="/resources/tutorials" exact component={Tutorials} />
            <Route path="/resources/blog/" exact component={Blog} />
            <Route path="/resources/supplies/" exact component={Supplies} />
          </Resources>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
