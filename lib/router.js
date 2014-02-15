Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('postsList', { path: '/'});
});
