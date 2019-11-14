import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from './sketch2';
import Navigation from './Navigation';

//Header including p5 sketch and navbar
class Header extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className="" id="home">
        <P5Wrapper sketch={sketch2} className="sketch"/>
        <Navigation/>
          <h1>Arely Guevara</h1>
        </div>
        
        </React.Fragment>
    );
  }

}
  
  export default Header;