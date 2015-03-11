var React = require('react');
var qwest = require('qwest');

var Post = require('../post/post.component');

var Posts = React.createClass({
  getInitialState: function () {
    return {
      posts: []
    }
  },

  componentDidMount: function () {
    var url = 'http://staging.moonrakr.co/api/posts/';

    qwest.get( url ).then((response) => {

      // if we are still mounted
      if (this.isMounted()) {
        this.setState({
          posts: response
        });
      }

    });
  },

  render: function () {
    var posts = this.state.posts.map(function (post) {

      return <Post title={post.title} exceprt={post.excerpt}/>;
    });
    return (
      <div>
        { posts }
      </div>
    );
  }
});

module.exports = Posts;
