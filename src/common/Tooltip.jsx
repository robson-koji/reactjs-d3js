'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const createReactClass = require('create-react-class');


module.exports = createReactClass({

  propTypes: {
    x: PropTypes.number,
    y: PropTypes.number,
    child: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ]),
    show: PropTypes.bool,
  },

  render() {
    const props = this.props;
    const display = this.props.show ? 'inherit' : 'none';
    const containerStyles = {
      position: 'fixed',
      top: props.y,
      left: props.x,
      display,
      opacity: 0.8,
      width:'100px'
    };

    // TODO: add 'right: 0px' style when tooltip is off the chart
    const tooltipStyles = {
      position: 'absolute',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: '#ddd',
      borderRadius: '4px',
      padding: '5px',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '-15px',
      width:'100px'
    };
    return (
      <div style={containerStyles}>
        <div style={tooltipStyles} className="rd3-legend-text">
          {props.child}
        </div>
      </div>
    );
  },
});
