Router.configure({
  layoutTemplate: '',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('posts'); }
});


// Router.route('/mine', {name: 'mine'});
// Router.route('/mine', {
//   layoutTemplate: ''
// });
Router.route('mine', {
    path: '/mine',
    layoutTemplate: 'empty_layout',
    template: 'mine'
});
Router.route('test', {
    path: '/a',
    layoutTemplate: 'empty_layout',
    template: 'test'
});


Router.route('/', {
  layoutTemplate: 'layout'
});

Router.route('/hphone', {
  layoutTemplate: 'empty_layout',
  template: 'hphone'
});

Router.route('/hphonelist', {
  layoutTemplate: 'empty_layout',
  template: 'hphonelist'
});