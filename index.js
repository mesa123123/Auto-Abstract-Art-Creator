var drawArt = require('./drawArt')
var colors = require('./colors')
var shapes = require('./Shapes')

module.exports = {
    draw : drawArt.drawIt,
    randomColors: colors.colorList,
    randomShape: shapes.randomShape
}