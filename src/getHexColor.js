var tinycolor = require('tinycolor2');

module.exports = function(ev, canvasEl) {
  var canvasX = ev.pageX - canvasEl.offsetLeft;
  var canvasY = ev.pageY - canvasEl.offsetTop;
  var yPosition = (canvasEl.height - canvasY) / canvasEl.height  * 100;
  var hue = Math.round((canvasEl.width - canvasX) / canvasEl.width * 100);
  var lightness = Math.round(yPosition / 3 + 35);
  var saturation = Math.round(100 - (yPosition / 3 + 30))
  return {
    "hex": tinycolor("hsl("+hue+"%,"+saturation+"%,"+lightness+"%)").toHexString(),
    "hue": hue,
    "lightness": lightness,
    "saturation": saturation
  };
};