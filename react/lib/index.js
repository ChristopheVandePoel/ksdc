/** @jsx React.DOM */
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

requireStylesheet(process.env.STATIC_ROOT + 'MyComponent.css');

var MyComponent = React.createClass({displayName: 'MyComponent',
  render: function() {
    return React.DOM.span( {className:"MyComponent"}, "Hello, MyComponent!");
  }
});

module.exports = MyComponent;