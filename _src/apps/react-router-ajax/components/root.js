var React = require('react');

var Posts = require('./posts/posts.controller');
var Header = require('./header/header.component');

var Root = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }

});

module.exports = Root;
