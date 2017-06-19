import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div className="jombotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and react router in es6 ultra-responssive web apps</p>
        <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
