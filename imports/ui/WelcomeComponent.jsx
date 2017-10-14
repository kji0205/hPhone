import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import '../../packages/styles/welcome.css';
// import '../../imports/api/tasks.js'
import './welcome.css'

export default class WelcomeComponent extends Component {
  
  render() {
    return (
        <div className="welcome-component">
          <h1>!</h1>
          <nav>
            {/* <a href="/todo">todo</a>&nbsp; */}
          </nav>
          <div>
          <img className="bg" src="/img/P1080168.JPG" alt=""/>
          </div>
          <span className="yunaz-text">YUNAZ</span>
        </div>
    )
  }
}
