"use strict";

// Cache DOM
var svg = document.querySelector("#svg"),


// All
all = svg.querySelector("#all"),


// Main line
line = svg.querySelector("#line"),


// All except text
symbol = svg.querySelector("#symbol"),


// Text
text0 = svg.querySelector("#WE"),
    text1 = svg.querySelector("#Construction"),
    mask = svg.querySelector("#text-mask"),


// Blueprint
qualityParticle = svg.querySelector("#quality-particle"),
    cloud2 = svg.querySelector("#cloud2"),
    cloud = svg.querySelector("#cloud"),
    verticalFrame = svg.querySelector("#vertical"),
    horizontalFrame = svg.querySelector("#horizontal"),
    mainBuilding = svg.querySelector("#main"),
    baseBuilding = svg.querySelector("#base"),
    topBuilding = svg.querySelector("#top"),
    tipBuilding = svg.querySelector("#tip"),


// Smartphone
maskStream1 = svg.querySelector("#maskStream1"),
    maskStream2 = svg.querySelector("#maskStream2"),
    maskStream3 = svg.querySelector("#maskStream3"),
    maskStream4 = svg.querySelector("#maskStream4"),
    smartphoneBtn = svg.querySelector("#button"),


// Heart
heartline1 = svg.querySelector("#heartline1"),
    heartline2 = svg.querySelector("#heartline2"),


// Logo
logoline1 = svg.querySelector("#logoline1"),
    logoline2 = svg.querySelector("#logoline2");

var data = [];

for (var i = 0; i < 4; i++) {
  data[i] = svg.querySelector("#data" + (i + 1));
}

var ticks = [];

for (var i = 0; i < 12; i++) {
  ticks[i] = svg.querySelector("#measure-tick" + (i + 1));
}

var windows = [];

for (var i = 0; i < 40; i++) {
  windows[i] = svg.querySelector("#window" + (i + 1));
}
"use strict";

// Path data
var blueprintFoundation = "M3 292.9l133.794-2.126 77.903-1.238 6.57-.104 4.555-.072 5.315-.085 137.083-2.178 5.216-.083 6.086-.097 210.88-3.35";
var blueprint = "M590.063 283.67l-208.975 3.068 18.03-171.544c.462-4.394-2.724-8.333-7.116-8.795L227.898 89.15c-4.397-.46-8.327 2.73-8.79 7.127L201.237 266.33c-.462 4.39 2.722 8.335 7.11 8.796l98.088 11.31L3 293.096";
var smartphoneFoundation = "M3 292.9l163.717-2.6 69.39-1.104 11.64-.185 19.735-.312 11.202-.178 86.395-1.373 15.02-.24 31.226-.495 179.077-2.845";
var smartphone = "M589.936 283.688l-255.313 3.88 46.843-144.17c1.878-5.778-1.282-11.98-7.057-13.858l-85.607-27.815c-5.776-1.877-11.978 1.286-13.855 7.064l-49.134 151.218c-1.878 5.78 1.282 11.982 7.057 13.858l45.51 14.787L3 293.053";
var heartFoundation = "M3 292.9l143.043-2.273 44.708-.71 48.777-.775 59.932-.952 59.373-.944 47.324-.752 43.515-.69 140.73-2.237";
var heart = "M3.358 293.042s267.01-3.986 266.676-4.846c-34.967-22.367-75.94-78.088-86.408-107.5-14.108-39.642 6.792-89.946 45.636-97.867 38.844-7.922 59.478 13.58 67.738 27.304 8.343-13.725 34.713-36.296 71.74-27.19 37.025 9.106 60.058 58.24 45.635 97.867-10.34 28.407-49.03 83.348-84.708 106.873l260.564-3.832";
var beat = "M3.358 293.042s276.2-4.56 276.178-4.62c-34.967-22.368-76.443-78.314-86.91-107.726-14.108-39.642-2.208-95.946 36.636-103.867 38.844-7.922 59.478 14.58 67.738 28.304 8.343-13.725 34.713-37.296 71.74-28.19 37.025 9.106 51.058 64.24 36.635 103.867-10.34 28.407-50.887 84.085-86.567 107.61l271.423-4.57";
var logo = "M3 292.9h64.982c3.727 0 6.522-3.033 6.522-6.533V53.033c0-4.2 3.726-6.533 7.686-7.7L149.734 16.4c.7 0 1.398-.233 1.863-.233l42.623 8.166c4.193 1.4 7.686 3.5 7.686 7.7v238.934c0 2.1 1.63 3.733 3.727 3.733l26.086 2.333c2.095 0 3.726-1.633 3.726-3.733V116.733c0-4.2 3.493-7.7 7.686-7.7l73.6-4.2 25.853.234c4.192 0 7.686 3.5 7.686 7.7V288c0 2.1 1.63 3.733 3.727 3.733l31.21 2.334c2.097 0 3.727-1.634 3.727-3.734V22c0-4.2 3.494-7.7 7.686-7.7l46.815-4.433c.7 0 1.165 0 1.864.233l69.173 34.067c2.33 1.166 3.727 3.5 3.727 5.833v227.033c0 3.734 3.028 6.534 6.522 6.534h65.68";
var logoFoundation = "M3 292.9l67.28-1.07 2.223-.034 2.167-.035 2.267-.035 73.776-1.172 1.708-.027 47.71-.758 1.733-.028 1.512-.024 1.617-.025 28.57-.453 1.61-.026 1.616-.025 1.557-.024 78.526-1.247 29.387-.467 1.833-.03 2.128-.033 1.732-.028 33.64-.534 2.918-.045 3.36-.054 2.513-.04 47.986-.76 2.876-.047 67.978-1.08 2.378-.038 2.705-.043 3.202-.05 68.898-1.095";

var beatline1 = 'M371.364 206.48c-9.597 13.995-21.15 28.478-33.338 41.02';
var beatline2 = 'M207.66 146c0-33.78 14.513-57.693 36.572-56.79';
var beatline3 = 'M265.57 97.935c3.258 3.128 5.71 7.094 7.03 11.877';

var colors = {
  successGreen: "#3EE09E",
  dataBlue: "#3EBEE0",
  heartRed: "#E03E62"
};

var p = [{
  name: "particle0",
  bp: {
    xMax: random(-125, -175),
    yMax: random(0, 40),
    sMax: random(0.5, 1),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(-125, -175),
    yMax: random(30, 50),
    sMax: random(0.5, 1),
    fill: colors.dataBlue
  },
  h: {
    xMax: random(-135, -175),
    yMax: random(20, 60),
    sMax: random(0.5, 1),
    fill: colors.heartRed
  }
}, {
  name: "particle1",
  bp: {
    xMax: random(-125, -175),
    yMax: random(-60, -10),
    sMax: random(0.4, 0.8),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(-125, -175),
    yMax: random(-60, -10),
    sMax: 0,
    fill: colors.dataBlue
  },
  h: {
    xMax: random(-155, -185),
    yMax: random(-60, -10),
    sMax: random(0.4, 0.8),
    fill: colors.heartRed
  }
}, {
  name: "particle2",
  bp: {
    xMax: random(-125, -175),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(-125, -175),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.dataBlue
  },
  h: {
    xMax: random(-155, -185),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.heartRed
  }
}, {
  name: "particle3",
  bp: {
    xMax: random(-110, -90),
    yMax: random(-125, -200),
    sMax: random(0.3, 0.6),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(-110, -90),
    yMax: random(-125, -200),
    sMax: random(0.3, 0.6),
    fill: colors.dataBlue
  },
  h: {
    xMax: random(-110, -90),
    yMax: random(-165, -175),
    sMax: random(0.3, 0.6),
    fill: colors.heartRed
  }
}, {
  name: "particle4",
  bp: {
    xMax: random(125, 175),
    yMax: random(0, 40),
    sMax: random(0.5, 1),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(125, 175),
    yMax: random(0, 40),
    sMax: 0,
    fill: colors.dataBlue
  },
  h: {
    xMax: random(125, 155),
    yMax: random(40, 80),
    sMax: 0.5,
    fill: colors.heartRed
  }
}, {
  name: "particle5",
  bp: {
    xMax: random(125, 175),
    yMax: random(-60, -10),
    sMax: random(0.4, 0.8),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(125, 175),
    yMax: random(-150, -120),
    sMax: random(0.4, 0.8),
    fill: colors.dataBlue
  },
  h: {
    xMax: random(155, 185),
    yMax: random(-60, -10),
    sMax: random(0.4, 0.8),
    fill: colors.heartRed
  }
}, {
  name: "particle6",
  bp: {
    xMax: random(125, 175),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.successGreen
  },
  sp: {
    xMax: random(125, 175),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.dataBlue
  },
  h: {
    xMax: random(155, 195),
    yMax: random(-110, -70),
    sMax: random(0.3, 0.6),
    fill: colors.heartRed
  }
}];
"use strict";

function random(min, max) {
  if (max === null) {
    max = min;min = 0;
  }
  return Math.random() * (max - min) + min;
}

function map(value, sourceMin, sourceMax, destinationMin, destinationMax) {
  return destinationMin + (destinationMax - destinationMin) * ((value - sourceMin) / (sourceMax - sourceMin)) || 0;
}

// exponential index normalization = index^pow / count^pow
function expNorm(val, min, max, power) {
  var expValue = Math.pow(val - min, power);
  var expRange = Math.pow(max - min, power);

  // Test this to make sure...
  return expValue / expRange;
}

function degreesToRads(degrees) {
  return degrees * Math.PI / 180;
}

function radsToDegrees(rads) {
  return rads / Math.PI * 180;
}

/*

data = {
  x: [],
  y: [],
  scale: []
}

TweenMax.staggerFromTo(obj.property, 1, { obj.property.value[i]: 0 }, { obj.property.value[i]: 1 }, 0.1)

*/

/*

extend particle class

followLeader(leader, acceleration) {
  
}

*/
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle(radius, cx, cy) {
    _classCallCheck(this, Particle);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);

    if (cx && cy) {
      this.target.setAttribute("cx", cx);
      this.target.setAttribute("cy", cy);
    }
  }

  _createClass(Particle, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }]);

  return Particle;
}();
"use strict";

var particles = [];
var count = 7;
var parent = svg.querySelector("#particles");

function createParticles() {
  // Create X amount of particles
  for (var i = 0; i < count; i++) {
    var particle = new Particle(15, 300, 200);

    // Hide particle at birth
    particle.target.setAttribute("opacity", "0");

    // Append to DOM
    particle.appendTo(parent);

    // Push to array
    particles.push(particle);

    // Set target in data object
    p[i].target = particles[i].target;
  }
}

function setParticleBlueprint() {
  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    TweenMax.set(target, {
      x: obj.bp.xMax * 0.5,
      y: obj.bp.yMax * 0.5,
      scale: 0,
      transformOrigin: "center",
      fill: obj.bp.fill,
      autoAlpha: 1
    });
  }
}

function setParticleSmartphone() {
  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    TweenMax.set(target, {
      x: obj.sp.xMax * 0.4,
      y: obj.sp.yMax * 0.4,
      scale: 0,
      transformOrigin: "center",
      fill: obj.sp.fill,
      autoAlpha: 1
    });
  }
}

function setParticleHeart() {
  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    TweenMax.set(target, {
      x: obj.h.xMax * 0.7,
      y: obj.h.yMax * 0.7,
      scale: 0,
      transformOrigin: "center",
      fill: obj.h.fill,
      autoAlpha: 1
    });
  }
}

function animateParticleBlueprint() {

  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    var tl = new TimelineMax();

    tl.add("start")

    // In
    .to(target, 0.7, { x: obj.bp.xMax, y: obj.bp.yMax, scale: obj.bp.sMax, ease: Power4.easeOut }, "start")

    // Act
    .to(target, 1.3, { x: obj.bp.xMax * 0.95, y: "-=15", ease: Power1.easeIn })

    // Out
    .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2").to(target, 0.1, { autoAlpha: 0 }, "start =+2.2");
  }
}

function animateParticleSmartphone() {
  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    var tl = new TimelineMax();

    tl.add("start")

    // In
    .to(target, 0.7, { x: obj.sp.xMax * 0.8, y: obj.sp.yMax * 0.8, scale: obj.sp.sMax, ease: Power4.easeOut }, "start")

    // Act
    .to(target, 1.5, { x: "+=20", ease: Power1.easeIn })

    // Out
    .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2").to(target, 0.1, { autoAlpha: 0 }, "start =+2.2");
  }
}

function animateParticleHeart() {
  for (var i = 0; i < count; i++) {
    var obj = p[i];
    var target = obj.target;

    var tl = new TimelineMax();

    tl.add("start")

    // In
    .to(target, 0.7, { x: obj.h.xMax * 0.95, y: obj.h.yMax * 0.95, scale: obj.h.sMax, ease: Power4.easeOut }, "start")

    // Act
    .to(target, 1.3, { x: obj.h.xMax * 0.85, y: obj.h.yMax * 0.85, ease: Power1.easeIn }).to(target, 0.2, { scale: "+=0.2", repeat: 1, yoyo: true, ease: Power1.easeOut, repeatDelay: 0.05 }, "start =+1.15")

    // Out
    .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2").to(target, 0.1, { autoAlpha: 0 }, "start =+2.2");
  }
}
"use strict";

function getBlueprintDetailsTl() {

  var tl = new TimelineMax();

  tl
  // Up
  .to(horizontal, 0.8, { drawSVG: "100%", ease: Power4.easeOut }, 0).to(vertical, 0.6, { drawSVG: "100%", ease: Power2.easeOut }, 0).staggerTo(ticks, 0.01, { autoAlpha: 1 }, 0.035, 0).staggerTo([cloud, cloud2], 0.5, { scale: 1, ease: Back.easeOut }, -0.1, 0.2).set(mainBuilding, { autoAlpha: 1 }, 0.6).fromTo(mainBuilding, 1, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeIn }, 0.5).set(baseBuilding, { autoAlpha: 1 }, 0.8).fromTo(baseBuilding, 0.3, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeOut }, 0.9).staggerTo(windows, 0.01, { autoAlpha: 1 }, 0.015, 1).set([topBuilding, tipBuilding], { autoAlpha: 1 }, 1.4).fromTo([topBuilding, tipBuilding], 0.2, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeInOut }, 1.4)

  // Down
  .to([cloud, cloud2], 0.5, { y: 100, scale: 0, ease: Back.easeIn }, 1.8).set([topBuilding, tipBuilding], { autoAlpha: 0 }, 2.1).staggerTo(windows, 0.01, { autoAlpha: 0 }, -0.005, 2.1).fromTo(mainBuilding, 0.4, { drawSVG: "100%" }, { drawSVG: "50% 50%", ease: Power3.easeIn }, 1.9).set(baseBuilding, { autoAlpha: 0 }, 2.3).set(mainBuilding, { autoAlpha: 0 }, 2.3).to(vertical, 0.4, { drawSVG: "0%", ease: Power2.easeIn }, 1.9).staggerTo(ticks, 0.01, { autoAlpha: 0 }, -0.03, 2).to(horizontal, 0.2, { drawSVG: "0%", ease: Power2.easeIn }, 2)
  //.set(horizontal, { autoAlpha: 0}, 2.2)
  ;

  return tl;
}
"use strict";

function getSmartphoneDetailsTl() {

  var tl = new TimelineMax();

  tl.set(smartphoneBtn, { autoAlpha: 1 }, 0.3).fromTo(smartphoneBtn, 0.3, { drawSVG: "50% 50%" }, { drawSVG: "100%" }, 0.3).staggerTo(data, 0.01, { autoAlpha: 1 }, 0.1, 1).staggerTo(data, 0.7, { drawSVG: "0% 100%", ease: Power1.easeInOut }, 0.1, 0.9).staggerTo(data, 0.5, { drawSVG: "100% 100%", ease: Power1.easeIn }, 0.1, 1.4).to(smartphoneBtn, 0.3, { drawSVG: "50% 50%" }, 2).set(smartphoneBtn, { autoAlpha: 0 }, 2.2);

  return tl;
}
"use strict";

function setStart() {
  var lines = [heartline1, heartline2, logoline1, logoline2, smartphoneBtn, horizontal, vertical, mainBuilding, baseBuilding, topBuilding, tipBuilding];
  var clouds = [cloud, cloud2];

  // Reveal scene
  TweenMax.set(all, { autoAlpha: 1 });

  // First path for main line
  TweenMax.set(line, { attr: { d: blueprintFoundation } });

  // Start position and scale for everything but texts
  TweenMax.set(symbol, { scale: 1.5, transformOrigin: "bottom left", x: 110 });

  // Start position for texts and mask
  TweenMax.set([text0, text1], { x: -500, autoAlpha: 1 });
  TweenMax.set(mask, { x: 350 });

  // Start position for blueprint details
  TweenMax.set([ticks, windows], { autoAlpha: 0 });
  TweenMax.set(clouds, { scale: 0, transformOrigin: "center" });
  TweenMax.set(cloud, { x: 17 });
  TweenMax.set([baseBuilding, mainBuilding, topBuilding, tipBuilding], { autoAlpha: 0 });
  TweenMax.set(qualityParticle, { scale: 0, y: 10, transformOrigin: "bottom center" });

  // Start position for smartphone details
  TweenMax.set(data, { autoAlpha: 0 });
  TweenMax.set(smartphoneBtn, { autoAlpha: 0, rotation: 270, transformOrigin: "center" });

  // All lines undrawn
  TweenMax.set(lines, { drawSVG: "0%" });
  // Exceptions
  TweenMax.set(heartline1, { drawSVG: "100% 100%" });
  TweenMax.set(data, { drawSVG: "0%" });
}
"use strict";

function playTimeline() {
    // Arrays
    var heartlines = [heartline1, heartline2];
    var beatlines = [beatline1, beatline2];
    var logolines = [logoline1, logoline2];

    var tl = new TimelineMax({}).timeScale(1);

    tl.add("intro").from(line, 0.8, { drawSVG: "0", ease: Power2.easeIn }, "intro")

    // Up BLUEPRINT
    .add("blueprint").add(setParticleBlueprint).to(line, 0.8, { morphSVG: blueprint, ease: Back.easeOut }, "blueprint").add(animateParticleBlueprint, "blueprint =+0.05")

    // Details BLUEPRINT
    .add(getBlueprintDetailsTl, "blueprint")

    // Quality particle BLUEPRINT
    .to(qualityParticle, 0.4, { scale: 1, repeat: 1, yoyo: true, ease: Power2.easeOut }, "blueprint =+1.4").to(qualityParticle, 0.4, { y: "-=30", repeat: 1, yoyo: true, ease: Power1.easeOut }, "blueprint =+1.4")

    // Down BLUEPRINT
    .to(line, 0.5, { morphSVG: blueprintFoundation, ease: Back.easeIn }, "blueprint =+1.8")

    // Up SMARTPHONE
    .add("smartphone").add(setParticleSmartphone).set(line, { morphSVG: smartphoneFoundation }).to(line, 0.8, { morphSVG: smartphone, ease: Back.easeOut }, "smartphone").add(animateParticleSmartphone, "smartphone =+0.05")

    // Data stream SMARTPHONE
    .to(maskStream4, 0.5, { x: 185, ease: Power1.easeOut }, "smartphone =+1").to(maskStream1, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7").to(maskStream2, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7").to(maskStream3, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7")

    // Details SMARTPHONE
    .add(getSmartphoneDetailsTl, "smartphone")

    // Down SMARTPHONE
    .to(line, 0.5, { morphSVG: smartphoneFoundation, ease: Back.easeIn }, "smartphone =+1.8")

    // Up HEART
    .add("heart").add(setParticleHeart).set(line, { morphSVG: heartFoundation }).to(line, 0.8, { morphSVG: heart, ease: Back.easeOut }, "heart").add(animateParticleHeart, "heart =+0.05")

    // Draw HEART
    .to(heartlines, 0.5, { drawSVG: "100%", ease: Power2.easeInOut }, "heart =+0.2")

    // Beat HEART
    .to(line, 0.2, { morphSVG: beat, repeat: 1, yoyo: true, ease: Power1.easeOut, repeatDelay: 0.05 }, "heart =+1.2").staggerTo(heartlines, 0.2, { cycle: { morphSVG: beatlines }, repeat: 1, yoyo: true, ease: Power1.easeOut, repeatDelay: 0.05 }, 0, "heart =+1.2")

    // Down HEART
    .to(line, 0.5, { morphSVG: heartFoundation, ease: Back.easeIn }, "heart =+1.8").to(heartline1, 0.3, { drawSVG: "100% 100%", ease: Power1.easeIn }, "heart =+1.8").to(heartline2, 0.3, { drawSVG: "0%", ease: Power1.easeIn }, "heart =+1.8")

    // Up LOGO
    .add("logo").set(line, { morphSVG: logoFoundation }).to(line, 1.5, { morphSVG: logo, ease: Power2.easeOut }, "logo").to(logolines, 1.5, { drawSVG: "100%", ease: Power1.easeOut }, "logo")

    // Reveal
    .add("gopro").to(mask, 0.7, { x: 0, ease: Power3.easeIn }, "gopro").to(symbol, 0.7, { x: 0, scale: 1, ease: Power3.easeIn }, "gopro").to(text0, 0.7, { x: 0, ease: Power3.easeIn }, "gopro").to(text1, 0.7, { x: 0, ease: Power3.easeIn }, "gopro");
}
"use strict";

createParticles();
setStart();
playTimeline();
