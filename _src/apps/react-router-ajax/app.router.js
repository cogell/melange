var React = require('react');
var Router = require('react-router');

var Redirect = Router.Redirect;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Header = require('./components/header/header.component');
var Posts = require('./components/posts/posts.controller');
var Post = require('./components/post/post.component');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="media" path="/media" handler={Posts}>
      <Router name="post" path=":id" handler={Post}/>
    </Route>
    <Redirect from="/" to="media" />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
