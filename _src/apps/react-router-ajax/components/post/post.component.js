var React = require('react');
require('./post.style');

var Post = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      name: 'Cedric'
    };
  },

  componentDidMount: function () {

  },

  render: function () {
    console.log(this.props.title);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.exceprt}</p>
      </div>
    );
  }

});

module.exports = Post;
