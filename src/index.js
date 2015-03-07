var React = require('react');
var style = require('./style');
var getHexColor = require('./getHexColor');

var Colorplane = React.createClass({
  getInitialState: function() {
    return {activeColor: '#33cc77', color: '#33cc77'};
  },
  mouseover: function(ev) {
    var color = getHexColor(ev, this.refs.canvas.getDOMNode()).hex;
    this.setState({activeColor: color});
    this.refs.canvas.getDOMNode().style.background = color;
  },
  clickHandler: function(ev) {
    var color = this.state.activeColor;
    this.setState({color: color});
    this.refs.selectedColor.getDOMNode().style.background = color;
  },
  render: function() {
    return (
        <div style={{margin: "1em 0"}}>
          <div ref="selectedColor" style={style.selectedColorStyles}>
            <div style={style.instructionStyles}>{"Click to select a color"}</div>
          </div>
          <canvas ref="canvas" style={style.canvasStyles}
                  height={"280"} width={"380"}
                  onMouseMove={this.mouseover}
                  onClick={this.clickHandler}></canvas>
        </div>
    )
  }
});

module.exports = Colorplane;
