import React from 'react';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from '../imports/ui/App.jsx';

FlowRouter.route('/todo', {
    action() {
        // <App />
        // mount(null, {
        //     content: (<App />)
        // })
        render(<App />, document.getElementById("render-target"));
    }
});

FlowRouter.route('/mine', {
  action () {
    BlazeLayout.render('mine', {main: 'mine', data: ''})
  }
});

// FlowRouter.route('/posts/:_id', {
//   action (params) {
//     var post = Posts.findOne({_id: params._id});
//     BlazeLayout.render('layout', {main: 'postContent', data: post})
//   }
// });
