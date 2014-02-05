var TWO_PI = 2 * Math.PI;
var SCALE = 400;

var lissajous = [];
for (var i = 0, len = SCALE / 2; i <= len; i++) {
    lissajous.push({
        x: SCALE/3 * Math.cos(    TWO_PI * i/len) + SCALE/2
    });
}

var pathFn = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate('linear');

var svg = d3.select('#lissajous').append('svg')
    .attr('width', SCALE)
    .attr('height', SCALE);

var path = svg.append('path')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '0.25em')
    .attr('fill', 'none');

var w = 0;

function cycleLissajous() {
    for (var i = 0, len = SCALE / 2; i <= len; i++) {
        lissajous[i].y = SCALE/3 * Math.sin(3 * TWO_PI * i/len + w/360 * TWO_PI) + SCALE/2;
    }
}

setInterval(function () {
    w++;
    if (w === 360) w = 0;
    cycleLissajous();
    path.attr('d', pathFn(lissajous));
}, 10);