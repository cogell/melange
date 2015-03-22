var React = require('react');
var {StyleResolverMixin} = require('radium');

var Header = React.createClass({
  mixins: [StyleResolverMixin],

  render: function (){
    var headerStyles = {
      margin: '0 auto',
      textAlign: 'center'
    };

    return (
      <header
        style={this.buildStyles(headerStyles)}>AVANT</header>
    )
  }

});

module.exports = Header;
