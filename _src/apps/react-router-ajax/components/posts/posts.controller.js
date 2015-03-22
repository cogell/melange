var React = require('react');
var qwest = require('qwest');
var moment = require('moment');
var MasonryMixin = require('react-masonry-mixin');

var Post = require('../post/post.component');

var masonryOptions = {
  transitionDuration: 0
};

var Posts = React.createClass({

  mixins: [MasonryMixin('masonryContainer', masonryOptions)],

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

      console.log('post: ', post);

      // data wrangling
      var authors = post.authorsArray.join(', ');
      var publishedTime = moment(post.publishedAt).format('MMMM Do YYYY');

      return <Post
        key={post.id}
        title={post.title}
        excerpt={post.excerpt}
        image={post.headerImage.filelink}
        authors={authors}
        publishedTime={publishedTime}
        tags={post.tags}/>;
    });
    return (
      <div ref='masonryContainer'>
        { posts }
      </div>
    );
  }
});

module.exports = Posts;
