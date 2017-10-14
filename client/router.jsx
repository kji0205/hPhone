import React from 'react';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import App from '../imports/ui/App.jsx';
import MainLayout from '../imports/ui/MainLayout.jsx';
import WelcomeComponent from '../imports/ui/WelcomeComponent.jsx';
import Calc from '../imports/ui/Calc.jsx';


var ionRoutes = FlowRouter.group({
  prefix: '',   // 임시 prefix: '/ion',
  name: '',     // ion
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

ionRoutes.route('/', {
  action () {
    render(<WelcomeComponent />, document.getElementById("render-target"));
  },
});
ionRoutes.route('/main', {
  action(){
      render(<MainLayout />, document.getElementById('render-target'));
  }
})
ionRoutes.route('/calc', {
  action(){
      render(<Calc />, document.getElementById('render-target'));
  }
})

ionRoutes.route('/todo', {
  action () {
    render(<App />, document.getElementById("render-target"));
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /ion trigger');
  }]
});

ionRoutes.route('/calc', {
  action () {
    render(<Calc />, document.getElementById("render-target"));
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /ion trigger');
  }]
});

ionRoutes.route('/mine', {
  action: function() {
    BlazeLayout.render('mine', null);
  }
});

var testRoutes = FlowRouter.group({
  prefix: '/test',   
  name: 'test',     
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers : test');
  }]
});
testRoutes.route('/react-layout', {
  action () {
    render(<WelcomeComponent />, document.getElementById("render-target"));
    // BlazeLayout.render('mine', null);
  },
  // triggersEnter: [function(context, redirect) {
  //   console.log('running /ion trigger');
  // }]
});


// FlowRouter.route('/todo', {
//     action() {
//         // <App />
//         // mount(null, {
//         //     content: (<App />)
//         // })
//         render(<App />, document.getElementById("render-target"));
//     }
// });

// FlowRouter.route('/mine', {
//   action () {
//     BlazeLayout.render('mine', {main: 'mine', data: ''})
//   }
// });

// FlowRouter.route('/posts/:_id', {
//   action (params) {
//     var post = Posts.findOne({_id: params._id});
//     BlazeLayout.render('layout', {main: 'postContent', data: post})
//   }
// });

