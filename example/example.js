var React = require('react');
var Colorplane = require('../src/index.js');
var colorNotify = document.querySelector('.color');

function onChangeColor(color) {
  colorNotify.innerText = color;
  colorNotify.style.color = color;
}

React.render(<Colorplane color={"#33cc77"} onChange={onChangeColor}/>, document.querySelector('#contain'));
