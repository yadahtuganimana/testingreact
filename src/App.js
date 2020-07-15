import React,{Component} from 'react';
import NavigationMenues from './components/NavigationMenues';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
//import Make_Request from './components/Make_Request'

class App extends Component {

 render(){
  return (
      <div className="onecandidate-app container">
         <BrowserRouter>
           <NavigationMenues />
           <Route exact path='/' component={Home}></Route>
           <Route  path='/AboutUs' component={AboutUs}></Route>
           <Route  path='/ContactUs' component={ContactUs}></Route>
        
         </BrowserRouter>

      </div>
  );
}}

export default App;
