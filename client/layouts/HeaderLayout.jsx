import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class HeaderLayout extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className="wrap nav-main">
                <div className="nav-home">
                    <img className="nav-logo" src="https://facebook.github.io//react/img/logo.svg" width="36" height="36"/>
                    리액트 샘플
                </div>
            </div>
        )
    }
}