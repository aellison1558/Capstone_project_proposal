var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      context: null
    }
  },

  _determineCircleCoordinates: function(){
    var coordinateX = this.props.difference * 50 + 25;
    var coordinateY = 25 - this.props.difference * 50;
    return [coordinateY, coordinateX];
  },

  _determineTriangleCoordinates: function(){

  },

  _draw: function(){
    var ctx = this.state.context
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = '#00cc00';
    ctx.beginPath();
    ctx.arc(50, 50, 50, 1.25 * Math.PI, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = '#0000ff';
    ctx.beginPath();
    ctx.arc(75, 75, 5, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(this._determineCircleCoordinates()[0], this._determineCircleCoordinates()[1], 5, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.moveTo(25, 25);
    ctx.lineTo(10, 75);
    ctx.lineTo(25, 85);
    ctx.fill();

  },

  componentDidMount: function() {
    var context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
  },

  render: function() {
    if (this.state.context) {

      this._draw();
    }
    return (<canvas ref='canvas' width={100} height={100}></canvas>);
  }
});
