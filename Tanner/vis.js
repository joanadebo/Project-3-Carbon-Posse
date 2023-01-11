var features // all svg paths (countries) of the world
  // geojson for "all features we have loaded so far":
  , countries = { "type":"FeatureCollection", "features": [] }
  , toggle // animation on/off control
  , zoom = 1
  ;

var projection = d3.geo.azimuthal()
    .scale(380)
    .origin([-71.03,42.37])
    .mode("orthographic")
    .translate([400, 400]);

var circle = d3.geo.greatCircle()
    .origin(projection.origin());

// TODO fix d3.geo.azimuthal to be consistent with scale
var scale =
{ orthographic: 380
, stereographic: 380
, gnomonic: 380
, equidistant: 380 / Math.PI * 2
, equalarea: 380 / Math.SQRT2
};

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#body").append("svg:svg")
    .attr("width",  800)
    .attr("height", 800)
    .on("mousedown", mousedown);

if (frameElement) frameElement.style.height = '800px';

startAnimation();
d3.select('#animate').on('click', function () {
  if (done) startAnimation(); else stopAnimation();
});

function stopAnimation() {
  done = true;
  d3.select('#animate').node().checked = false;
}

function startAnimation() {
  done = false;
  d3.timer(function() {
    var origin = projection.origin();
    origin = [origin[0] + .18, origin[1] + .06];
    projection.origin(origin);
    circle.origin(origin);
    refresh();
    return done;
  });
}

function animationState() {
  return 'animation: '+ (done ? 'off' : 'on');
}

d3.select(window)
    .on("DOMMouseScroll", wheel)
    .on("mousewheel", wheel)
    .on("mousemove", mousemove)
    .on("mouseup", mouseup);

d3.select("select").on("change", function() {
  stopAnimation();
  projection.mode(this.value).scale(scale[this.value] * zoom);
  refresh(750);
});

var m0
  , o0
  , done
  ;

function wheel() {
  var e = d3.event
    , d = e.wheelDelta || -(e.detail || 0) / 3
    , p = d3.select("select")[0][0].value;
  e.preventDefault();
  zoom += d / 10;
  stopAnimation();
  projection.scale(scale[p] * zoom);
  refresh(75);
}

function mousedown() {
  stopAnimation();
  m0 = [d3.event.pageX, d3.event.pageY];
  o0 = projection.origin();
  d3.event.preventDefault();
}

function mousemove() {
  if (m0) {
    var m1 = [d3.event.pageX, d3.event.pageY]
      , o1 = [o0[0] + (m0[0] - m1[0]) / 8, o0[1] + (m1[1] - m0[1]) / 8];
    projection.origin(o1);
    circle.origin(o1);
    refresh();
  }
}

function mouseup() {
  if (m0) {
    mousemove();
    m0 = null;
  }
}

function refresh(duration) {
  var paths = duration ? features.transition().duration(duration) : features;
  if (paths) paths.attr("d", clip);
}

function clip(d) {
  return path(circle.clip(d));
}

function reframe(css) {
  for (var name in css)
    frameElement.style[name] = css[name] + 'px';
}