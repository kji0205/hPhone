import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './welcome.css'
import Welcome from './WelcomeComponent.jsx'

export default class MainLayout extends Component {
    render() {
        return <div>
            <header>
            This is our header
            </header>
            <main>
            {this.props.content}
            <Welcome></Welcome>
            </main>
            <footer>
            This is our footer
            </footer>
        </div>
    }
}