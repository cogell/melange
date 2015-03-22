var React = require('react');
var {StyleResolverMixin, BrowserStateMixin} = require('radium');
var Link = require('router').link;

var Card = React.createClass({
  mixins: [StyleResolverMixin, BrowserStateMixin],

  render: function () {
    var blue = '#2B4AB3';

    var styles = {
      width: '200',
      border: `1px solid ${blue}`,
      marginBottom: '10',
      cursor: 'pointer'
    };

    var imgStyles = {
      width: '100%'
    };

    var authorStyles = {
      color: blue
    };

    var timeStyles = {
      color: '#ADADAD'
    };

    var tagListStyles = {
      listStyleType: 'none',
      paddingLeft: 0,
      color: blue
    };

    var tagStyles = {
      display: 'inline',
      marginRight: 3
    };

    return (
      <div
        {...this.getBrowserStateEvents()}
        onClick={this.handleClick}
        style={this.buildStyles(styles)}>
        <Link to="post" params={{id: }}/>

        <img
          src={this.props.image}
          style={this.buildStyles(imgStyles)}/>
        <h1>{this.props.title}</h1>
        <h2
          style={this.buildStyles(authorStyles)}>{this.props.authors}</h2>
        <span
          style={this.buildStyles(timeStyles)}>{this.props.publishedTime}</span>
        <p>{this.props.excerpt}</p>
        <ul
          style={this.buildStyles(tagListStyles)}>
          {this.props.tags.map((tag)=>{
            return <li
              style={this.buildStyles(tagStyles)}>{tag}</li>
          })}
        </ul>

      </div>
    );
  }
});

module.exports = Card;