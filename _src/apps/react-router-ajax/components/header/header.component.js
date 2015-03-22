var React = require('react');
var {StyleResolverMixin} = require('radium');

var Header = React.createClass({
  mixins: [StyleResolverMixin],

  render: function (){
    return (
      <header>AVANT</header>
    )
  }

});

module.exports = Header;
