import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Home/Grid';
import List from './components/Home/List';
import AdminEdit from './components/Admin/AdminEdit';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import HomeGrid from './components/Home/HomeGrid';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
                <Navbar/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/" component={Admin}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/grid" component={Grid}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
