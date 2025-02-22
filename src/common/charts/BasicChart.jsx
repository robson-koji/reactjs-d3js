'use strict';
import ChartContext from '../../ChartContext';


const PropTypes = require('prop-types');
const React = require('react');
const createReactClass = require('create-react-class');


module.exports = createReactClass({

  displayName: 'BasicChart',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    svgClassName: PropTypes.string,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  },

  getDefaultProps() {
    return {
      className: 'rd3-basic-chart',
      svgClassName: 'rd3-chart',
      titleClassName: 'rd3-chart-title',
      title: '',
      svgChart:{width:"100%", height:"100%"}
    };
  },

  _renderTitle() {
    const props = this.props;

    if (props.title !== '') {
      return (
        <h4
          className={props.titleClassName}
        >
          {props.title}
        </h4>
      );
    }
    return null;
  },

  _renderChart() {
    const props = this.props;

    return (
      <svg
        className={props.svgClassName}
        height={props.height}
        viewBox={props.viewBox}
        width={props.width}
      >
        {props.children}
      </svg>
    );
  },

  render() {
    const props = this.props;

    /* Context */
    this.contextType = ChartContext;
    const { chartStyle }  = this.contextType._currentValue;


    return (
      <svg
        className={`${props.svgClassName} ${chartStyle}`}
        height={props.height}
        viewBox={props.viewBox}
        width={props.width}
      >
        <svg viewBox={props.viewBox} width={props.width} height={props.svgChart.height}>
          {this._renderTitle()}
          {this._renderChart()}
        </svg>
      </svg>
    );
  },
});
