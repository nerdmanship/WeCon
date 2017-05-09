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

var animateLogo = function animateLogo(parent, options) {

  // Inject graphics in passed div
  injectHtml(parent);

  // Create references to elements to be animated
  cacheDOM();

  // Create particle elements
  createParticles();

  // Set start values
  setStart();

  // Start the timeline
  playTimeline(options);
};
'use strict';

function injectHtml(parent) {
  var parentContainer = document.querySelector(parent);

  var html = '<svg id="svg" style="overflow: visible" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1110 300" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <defs>\n          <g data-paths>\n            <path id="data-stream" fill="#3EBEE0" d="M86.057 7.015h94.578c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5H86.057c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"></path>\n            <path id="data-mask1" d="M4.057 7.015h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"></path>\n            <path id="data-mask2" d="M4.057 7.015h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"></path>\n            <path id="data-mask3" d="M4.057 7.015h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"></path>\n            <path id="data-mask4" d="M4.057 7.015h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5zm30 0h15c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5h-15c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"></path>\n          </g>\n          <g data-masks>\n            <mask id="stream1" fill="#fff">\n              <use xlink:href="#data-mask1"></use>\n            </mask>\n            <mask id="stream2" fill="#fff">\n              <use xlink:href="#data-mask2"></use>\n            </mask>\n            <mask id="stream3" fill="#fff">\n              <use xlink:href="#data-mask3"></use>\n            </mask>\n            <mask id="stream4" fill="#fff">\n              <use xlink:href="#data-mask4"></use>\n            </mask>\n            <mask id="mask" fill="#fff">\n              <path id="text-mask" fill="#FFF" d="M0 0h495v386H0z"></path>\n            </mask>\n          </g>\n        </defs>\n        <g id="all" opacity="0" transform="translate(0 70)">\n          <g id="symbol">\n            <g id="lineart" stroke-width="4.66" stroke="#000" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n              <path id="line"></path>\n            </g>\n            <g id="details" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round">\n              <g id="logo" stroke="#000">\n                <path id="logoline1" d="M151.132 275.867v-234.5"></path>\n                <path id="logoline2" d="M444.367 285.667v-244.3"></path>\n              </g>\n              <g id="heart" fill="none" stroke="#000">\n                <path id="heartline1" d="M379.364 212.48c-9.597 13.995-21.15 28.478-33.338 41.02"></path>\n                <path id="heartline2" d="M199.66 150c0-33.78 27.13-53.4 49.188-52.497"></path>\n              </g>\n              <g id="smartphone">\n                <g id="details-smartphone" stroke="#000" stroke-width="2.33" transform="translate(243 125)" stroke-linecap="round" stroke-linejoin="round">\n                  <circle id="button" fill="none" cx="38.5" cy="138.5" r="7.5"></circle>\n                  <path id="data4" d="M16.89 99.34l64.94 20.83"></path>\n                  <path id="data3" d="M26.89 70.34l64.94 20.83"></path>\n                  <path id="data2" d="M35.89 41.34l64.94 20.83"></path>\n                  <path id="data1" d="M45.89 12.34l64.94 20.83"></path>\n                </g>\n                <g id="data-streams">\n                  <use xlink:href="#data-stream" mask="url(#stream1)" transform="translate(295 166)"></use>\n                  <use xlink:href="#data-stream" mask="url(#stream2)" transform="translate(284 206)"></use>\n                  <use xlink:href="#data-stream" mask="url(#stream3)" transform="translate(271 246)"></use>\n                  <use xlink:href="#data-stream" mask="url(#stream4)" transform="translate(50 190)"></use>\n                </g>\n              </g>\n              <g id="blueprint">\n                <g id="cloudback" fill="#FFF" stroke="#000" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round">\n                  <path id="cloud2" d="M323.618 175.68c-.26 2.472 1.534 4.686 4.005 4.946l17.902 1.882c2.47.26 4.686-1.534 4.945-4.005.26-2.472-1.533-4.686-4.005-4.946-.216-.023-.43-.03-.642-.022-.313-3.498-3.062-6.4-6.687-6.782-1.76-.185-3.445.256-4.83 1.143-.63-.475-1.393-.79-2.236-.88-2.47-.26-4.686 1.534-4.945 4.005-.027.25-.032.497-.018.74-1.832.41-3.282 1.95-3.49 3.92z"></path>\n                </g>\n                <g id="scraper" stroke="#000" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round">\n                  <path id="main" fill="none" d="M308.396 140.335l9.01.947-10.242 97.463-29.836-3.136 10.215-97.465 9.82 1.01"></path>\n                  <path id="base" d="M307.033 231.066l-28.006-2.943"></path>\n                  <path id="top" fill="none" d="M312.274 140.742l2.096-8.83-21.88-2.3v8.702"></path>\n                  <path id="tip" d="M303.513 129.98l.754-7.173"></path>\n                  <path id="window40" d="M293.224 145.178l-.228 2.172"></path>\n                  <path id="window39" d="M298.86 145.77l-.23 2.172"></path>\n                  <path id="window38" d="M304.495 146.363l-.228 2.17"></path>\n                  <path id="window37" d="M310.13 146.955l-.227 2.172"></path>\n                  <path id="window36" d="M292.388 153.134l-.23 2.172"></path>\n                  <path id="window35" d="M298.023 153.726l-.228 2.172"></path>\n                  <path id="window34" d="M303.66 154.32l-.23 2.17"></path>\n                  <path id="window33" d="M309.295 154.91l-.23 2.173"></path>\n                  <path id="window32" d="M291.55 161.09l-.227 2.172"></path>\n                  <path id="window31" d="M297.187 161.683l-.228 2.17"></path>\n                  <path id="window30" d="M302.823 162.275l-.23 2.172"></path>\n                  <path id="window29" d="M308.458 162.867l-.228 2.172"></path>\n                  <path id="window28" d="M290.715 169.046l-.228 2.172"></path>\n                  <path id="window27" d="M296.35 169.64l-.227 2.17"></path>\n                  <path id="window26" d="M301.986 170.23l-.228 2.173"></path>\n                  <path id="window25" d="M307.622 170.823l-.228 2.172"></path>\n                  <path id="window24" d="M289.88 177.003l-.23 2.17"></path>\n                  <path id="window23" d="M295.515 177.595l-.23 2.172"></path>\n                  <path id="window22" d="M301.15 178.187l-.228 2.172"></path>\n                  <path id="window21" d="M306.786 178.78l-.228 2.17"></path>\n                  <path id="window20" d="M288.923 185.26l-.23 2.17"></path>\n                  <path id="window19" d="M294.558 185.85l-.228 2.173"></path>\n                  <path id="window18" d="M300.194 186.444l-.228 2.172"></path>\n                  <path id="window17" d="M305.83 187.036l-.23 2.172"></path>\n                  <path id="window16" d="M288.087 193.215l-.23 2.172"></path>\n                  <path id="window15" d="M293.722 193.808l-.228 2.17"></path>\n                  <path id="window14" d="M299.358 194.4l-.228 2.172"></path>\n                  <path id="window13" d="M304.993 194.992l-.228 2.172"></path>\n                  <path id="window12" d="M287.25 201.17l-.228 2.173"></path>\n                  <path id="window11" d="M292.886 201.764l-.228 2.172"></path>\n                  <path id="window10" d="M298.522 202.356l-.23 2.172"></path>\n                  <path id="window9" d="M304.157 202.948l-.228 2.172"></path>\n                  <path id="window8" d="M286.414 209.128l-.228 2.17"></path>\n                  <path id="window7" d="M292.05 209.72l-.23 2.172"></path>\n                  <path id="window6" d="M297.685 210.312l-.228 2.172"></path>\n                  <path id="window5" d="M303.32 210.905l-.227 2.17"></path>\n                  <path id="window4" d="M285.578 217.084l-.228 2.172"></path>\n                  <path id="window3" d="M291.213 217.676l-.228 2.172"></path>\n                  <path id="window2" d="M296.85 218.268l-.23 2.172"></path>\n                  <path id="window1" d="M302.485 218.86l-.23 2.173"></path>\n                </g>\n                <g id="cloudfront" fill="#FFF" stroke="#000" stroke-width="2.33" stroke-linecap="round" stroke-linejoin="round">\n                  <path id="cloud" d="M249.618 153.68c-.26 2.472 1.534 4.686 4.005 4.946l17.902 1.882c2.47.26 4.686-1.534 4.945-4.005.26-2.472-1.533-4.686-4.005-4.946-.216-.023-.43-.03-.642-.022-.313-3.498-3.062-6.4-6.687-6.782-1.76-.185-3.445.256-4.83 1.143-.63-.475-1.393-.79-2.236-.88-2.47-.26-4.686 1.534-4.945 4.005-.027.25-.032.497-.018.74-1.832.41-3.282 1.95-3.49 3.92z"></path>\n                </g>\n                <g id="frame" transform="rotate(6 -1050.412 2362.812)">\n                  <path id="vertical" stroke="#000" stroke-width="2.33" d="M125.486 135.832V.49" stroke-linecap="round" stroke-linejoin="round"></path>\n                  <path id="horizontal" stroke="#000" stroke-width="2.33" d="M134.933 125.023H.553" stroke-linecap="round" stroke-linejoin="round"></path>\n                  <circle id="measure-tick1" cx="126.463" cy="116.878" r="2" fill="#000"></circle>\n                  <circle id="measure-tick2" cx="126.412" cy="106.828" r="2" fill="#000"></circle>\n                  <circle id="measure-tick3" cx="126.361" cy="96.778" r="2" fill="#000"></circle>\n                  <circle id="measure-tick4" cx="126.311" cy="86.729" r="2" fill="#000"></circle>\n                  <circle id="measure-tick5" cx="126.26" cy="76.679" r="2" fill="#000"></circle>\n                  <circle id="measure-tick6" cx="126.209" cy="66.629" r="2" fill="#000"></circle>\n                  <circle id="measure-tick7" cx="126.158" cy="56.579" r="2" fill="#000"></circle>\n                  <circle id="measure-tick8" cx="126.207" cy="46.519" r="2" fill="#000"></circle>\n                  <circle id="measure-tick9" cx="126.156" cy="36.469" r="2" fill="#000"></circle>\n                  <circle id="measure-tick10" cx="126.205" cy="26.409" r="2" fill="#000"></circle>\n                  <circle id="measure-tick11" cx="126.154" cy="16.359" r="2" fill="#000"></circle>\n                  <circle id="measure-tick12" cx="126.104" cy="6.31" r="2" fill="#000"></circle>\n                </g>\n                <g id="quality-particle" transform="translate(272 0)">\n                  <circle id="particle" cx="39" cy="39" r="39" fill="#3EE09E"></circle>\n                  <g id="check" stroke="#FFF" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round">\n                    <path id="Path-10-Copy" d="M32.87 59.87l24.822-37.82"></path>\n                    <path id="Path-10-Copy-2" d="M32.05 59.89 19.39 36.23"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <g id="particles"></g>\n          </g>\n          <g id="text" transform="translate(628 -41)" fill="#000" mask="url(#mask)">\n            <path id="WE" d="M303.618 52.5l-58.694 201.133H212.55l-44.72-134.166-44.486 134.166H88.64L32.044 52.5H70.24l40.06 142.8 44.72-142.8h25.62l46.35 139.067L265.42 52.5h38.198zM458.737 253.633H327.375V52.5H455.71v35.7h-90.837v42.7h70.573v35.7h-70.573v51.333h93.864z"></path>\n            <path id="Construction" d="M52.306 326.667c-3.028 0-5.822-.467-8.384-1.634-2.563-1.166-4.892-2.566-6.755-4.433-1.863-1.867-3.26-4.2-4.425-7s-1.63-5.833-1.63-9.1c0-3.267.465-6.3 1.63-9.1 1.164-2.8 2.562-5.133 4.425-7s3.96-3.5 6.522-4.433c2.56-1.167 5.356-1.634 8.383-1.634 4.66 0 8.618.934 12.112 2.567l-.932 7.467c-3.96-1.634-7.686-2.567-11.18-2.567-2.096 0-3.726.467-5.357 1.167-1.63.7-2.794 1.633-3.96 3.033-1.164 1.4-1.862 2.8-2.328 4.667-.466 1.866-.932 3.733-.932 6.066 0 2.334.233 4.2.932 6.067.7 1.867 1.397 3.267 2.33 4.667 1.164 1.4 2.328 2.333 3.958 3.033 1.63.7 3.26 1.167 5.357 1.167 3.494 0 7.22-.934 11.18-2.567l.932 7.467c-3.26 1.4-7.453 2.1-11.88 2.1zM103.78 320.6c-3.96 3.967-8.85 6.067-15.14 6.067-3.027 0-5.822-.467-8.384-1.634-2.562-1.166-4.89-2.566-6.755-4.433-1.862-1.867-3.26-4.2-4.424-7-1.165-2.8-1.63-5.833-1.63-9.1 0-3.267.465-6.3 1.63-9.1 1.165-2.8 2.562-5.133 4.425-7 1.865-1.867 3.96-3.5 6.523-4.433 2.562-1.167 5.357-1.634 8.385-1.634 3.027 0 5.822.467 8.384 1.634 2.562 1.166 4.892 2.566 6.755 4.433 1.863 1.867 3.26 4.2 4.425 7 .932 2.8 1.63 5.833 1.63 9.1.233 6.767-1.863 12.133-5.822 16.1zm-5.823-26.833c-2.096-2.8-5.124-3.967-9.316-3.967-2.096 0-3.726.467-5.356 1.167S80.49 292.6 79.324 294s-1.863 2.8-2.33 4.667c-.465 1.866-.93 3.733-.93 6.066 0 2.334.232 4.2.93 6.067.7 1.867 1.398 3.267 2.33 4.667 1.165 1.4 2.33 2.333 3.96 3.033 1.63.7 3.26 1.167 5.357 1.167 2.097 0 3.727-.467 5.357-1.167 1.63-.7 2.795-1.633 3.96-3.033s1.863-2.8 2.33-4.667c.465-1.867.93-3.733.93-6.067 0-4.666-1.164-8.166-3.26-10.966zM150.362 325.967h-6.29l-19.563-29.4v29.4h-7.687v-42.7h7.686l18.166 27.533v-27.533h7.686v42.7zM172.023 326.667c-3.028 0-5.823-.234-8.385-.934-2.562-.7-4.425-1.4-5.823-2.1l.932-8.866c1.397 1.166 3.028 2.333 5.357 3.266 2.33.934 4.89 1.4 7.92 1.4 5.123 0 7.685-1.633 7.685-4.666 0-.934-.234-1.634-.7-2.334-.466-.7-.932-1.4-1.63-1.866l-2.096-1.4c-.7-.467-1.63-.7-2.33-.934l-5.822-2.1-2.33-.933c-2.56-1.167-4.425-2.333-5.59-3.733-1.164-1.4-1.863-3.5-1.863-6.067 0-1.633.232-3.267.93-4.667.7-1.4 1.63-2.8 2.796-4.2 1.165-1.166 2.795-2.1 4.89-2.8 1.864-.7 4.193-1.166 6.988-1.166 1.398 0 2.795 0 3.96.233 1.397.233 2.562.467 3.96.7 1.164.233 2.33.7 3.26 1.167.932.466 1.863.7 2.33 1.166l-.7 7.934c-4.658-2.567-8.85-3.734-12.577-3.734-1.164 0-2.096 0-3.028.234-.932.233-1.864.466-2.563.7-.698.233-1.164.933-1.63 1.4-.466.466-.7 1.166-.7 2.1 0 1.166.234 1.866.7 2.566.466.7 1.165 1.167 2.33 1.634.93.466 2.328.933 3.726 1.4 1.397.466 3.26 1.166 5.124 1.866l3.26 1.167c.932.233 1.63.7 2.796 1.4.93.7 1.863 1.4 2.562 2.333.698.934 1.397 1.867 1.863 3.034.466 1.166.7 2.566.7 3.966 0 1.4-.234 2.8-.467 4.2-.232 1.4-1.164 3.034-2.095 4.2-1.165 1.4-2.795 2.334-4.892 3.267-2.33.7-5.124 1.167-8.85 1.167zM223.03 290.733h-12.11v35.234h-7.687v-35.234h-12.11v-7.466h31.907zM261.228 325.967h-8.152l-8.85-15.867h-7.92v15.867h-7.686v-42.7h15.605c9.783 0 14.674 4.2 14.674 12.366 0 3.034-.7 5.6-1.865 7.467-1.164 1.867-3.027 3.5-5.357 4.9l9.55 17.967zM242.595 289.8h-6.056v13.067h5.822c3.26 0 5.59-.467 6.754-1.634 1.165-1.166 1.864-2.8 1.864-4.9 0-2.1-.7-3.733-1.864-4.9-1.164-1.166-3.493-1.633-6.52-1.633zM266.352 307.533v-24.5h7.686v21.934c0 2.333.233 4.2.466 6.066.233 1.867.93 3.267 1.63 4.434.7 1.166 1.863 2.1 3.028 2.8 1.165.7 2.795.933 4.658.933 1.864 0 3.494-.233 4.658-.933 1.165-.7 2.33-1.634 3.028-2.8.7-1.167 1.398-2.8 1.63-4.434.234-1.633.467-3.733.467-6.066v-21.934h7.686v24.5c0 6.067-1.4 10.734-4.427 14-3.028 3.5-7.453 5.134-13.276 5.134-5.822 0-10.248-1.634-13.276-5.134-2.56-3.266-3.958-7.933-3.958-14zM329.005 326.667c-3.028 0-5.823-.467-8.385-1.634-2.562-1.166-4.89-2.566-6.754-4.433-1.863-1.867-3.26-4.2-4.425-7-1.164-2.8-1.63-5.833-1.63-9.1 0-3.267.466-6.3 1.63-9.1 1.165-2.8 2.563-5.133 4.426-7s3.96-3.5 6.52-4.433c2.563-1.167 5.358-1.634 8.386-1.634 4.658 0 8.618.934 12.112 2.567l-.932 7.467c-3.96-1.634-7.686-2.567-11.18-2.567-2.096 0-3.726.467-5.357 1.167-1.63.7-2.795 1.633-3.96 3.033-1.164 1.4-1.863 2.8-2.328 4.667-.466 1.866-.932 3.733-.932 6.066 0 2.334.233 4.2.932 6.067.698 1.867 1.397 3.267 2.33 4.667 1.163 1.4 2.328 2.333 3.958 3.033 1.63.7 3.26 1.167 5.357 1.167 3.494 0 7.22-.934 11.18-2.567l.932 7.467c-3.26 1.4-7.22 2.1-11.88 2.1zM375.82 290.733h-12.11v35.234h-7.687v-35.234H343.91v-7.466h31.91zM389.096 325.967h-7.686v-42.7h7.686zM432.185 320.6c-3.96 3.967-8.85 6.067-15.14 6.067-3.027 0-5.822-.467-8.384-1.634-2.56-1.166-4.89-2.566-6.754-4.433-1.863-1.867-3.26-4.2-4.425-7-1.164-2.8-1.63-5.833-1.63-9.1 0-3.267.466-6.3 1.63-9.1 1.166-2.8 2.563-5.133 4.426-7 1.864-1.867 3.96-3.5 6.522-4.433 2.562-1.167 5.357-1.634 8.385-1.634 3.028 0 5.822.467 8.384 1.634 2.562 1.166 4.892 2.566 6.755 4.433 1.863 1.867 3.26 4.2 4.425 7 .932 2.8 1.63 5.833 1.63 9.1 0 6.767-1.863 12.133-5.822 16.1zm-5.823-26.833c-2.096-2.8-5.124-3.967-9.316-3.967-2.097 0-3.727.467-5.357 1.167-1.632.7-2.796 1.633-3.96 3.033-1.165 1.4-1.864 2.8-2.33 4.667-.466 1.866-.932 3.733-.932 6.066 0 2.334.233 4.2.932 6.067.7 1.867 1.397 3.267 2.33 4.667 1.164 1.4 2.328 2.333 3.96 3.033 1.63.7 3.26 1.167 5.356 1.167s3.726-.467 5.357-1.167c1.63-.7 2.794-1.633 3.96-3.033 1.164-1.4 1.862-2.8 2.328-4.667.467-1.867.933-3.733.933-6.067-.233-4.666-1.165-8.166-3.26-10.966zM478.534 325.967h-6.52l-19.566-29.4v29.4h-7.686v-42.7h7.686l18.167 27.533v-27.533h7.686v42.7z"></path>\n          </g>\n        </g>\n      </svg>';

  parentContainer.insertAdjacentHTML('beforeend', html);
}
"use strict";

function cacheDOM() {

  // var svg = document.querySelector("#svg"),

  // // All
  // all = svg.querySelector("#all"),

  // // Main line
  // line = svg.querySelector("#line"),

  // // All except text
  // symbol = svg.querySelector("#symbol"),

  // // Text
  // text0 = svg.querySelector("#WE"),
  // text1 = svg.querySelector("#Construction"),
  // mask = svg.querySelector("#text-mask"),

  // // Blueprint
  // qualityParticle = svg.querySelector("#quality-particle"),
  // cloud2 = svg.querySelector("#cloud2"),
  // cloud = svg.querySelector("#cloud"),
  // verticalFrame = svg.querySelector("#vertical"),
  // horizontalFrame = svg.querySelector("#horizontal"),
  // mainBuilding = svg.querySelector("#main"),
  // baseBuilding = svg.querySelector("#base"),
  // topBuilding = svg.querySelector("#top"),
  // tipBuilding = svg.querySelector("#tip"),

  // // Smartphone
  // maskStream1 = svg.querySelector("#data-mask1"),
  // maskStream2 = svg.querySelector("#data-mask2"),
  // maskStream3 = svg.querySelector("#data-mask3"),
  // maskStream4 = svg.querySelector("#data-mask4"),
  // smartphoneBtn = svg.querySelector("#button"),

  // // Heart
  // heartline1 = svg.querySelector("#heartline1"),
  // heartline2 = svg.querySelector("#heartline2"),

  // // Logo
  // logoline1 = svg.querySelector("#logoline1"),
  // logoline2 = svg.querySelector("#logoline2")
  // ;


  // for(var i = 0; i < 4; i++) {
  //   data[i] = svg.querySelector("#data" + (i+1));
  // }


  // for(var i = 0; i < 12; i++) {
  //   ticks[i] = svg.querySelector("#measure-tick" + (i+1));
  // }


  // for(var i = 0; i < 40; i++) {
  //   windows[i] = svg.querySelector("#window" + (i+1));
  // }

}
"use strict";

function random(min, max) {
	if (max === null) {
		max = min;min = 0;
	}
	return Math.random() * (max - min) + min;
}
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

function createParticles() {

  var count = 7;
  var parentContainer = svg.querySelector("#particles");
  var particles = [];

  // Create X amount of particles
  for (var i = 0; i < count; i++) {
    var particle = new Particle(15, 300, 200);

    // Hide particle at birth
    particle.target.setAttribute("opacity", "0");

    // Append to DOM
    particle.appendTo(parentContainer);

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

function setStart() {
  var lines = [heartline1, heartline2, logoline1, logoline2, smartphoneBtn, horizontalFrame, verticalFrame, mainBuilding, baseBuilding, topBuilding, tipBuilding];
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

function playTimeline(options) {

    // If no options object was passed, create one
    if (!options) {
        options = {};
    }

    // Set values to passed options or fall back on default
    var delay = options.delay || 0;

    var heartlines = [heartline1, heartline2];
    var beatlines = [beatline1, beatline2];
    var logolines = [logoline1, logoline2];

    var tl = new TimelineMax({ delay: delay }).timeScale(1);

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

function getBlueprintDetailsTl() {

  var tl = new TimelineMax();

  tl
  // Up
  .to(horizontalFrame, 0.8, { drawSVG: "100%", ease: Power4.easeOut }, 0).to(verticalFrame, 0.6, { drawSVG: "100%", ease: Power2.easeOut }, 0).staggerTo(ticks, 0.01, { autoAlpha: 1 }, 0.035, 0).staggerTo([cloud, cloud2], 0.5, { scale: 1, ease: Back.easeOut }, -0.1, 0.2).set(mainBuilding, { autoAlpha: 1 }, 0.6).fromTo(mainBuilding, 1, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeIn }, 0.5).set(baseBuilding, { autoAlpha: 1 }, 0.8).fromTo(baseBuilding, 0.3, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeOut }, 0.9).staggerTo(windows, 0.01, { autoAlpha: 1 }, 0.015, 1).set([topBuilding, tipBuilding], { autoAlpha: 1 }, 1.4).fromTo([topBuilding, tipBuilding], 0.2, { drawSVG: "50% 50%" }, { drawSVG: "100%", ease: Power1.easeInOut }, 1.4)

  // Down
  .to([cloud, cloud2], 0.5, { y: 100, scale: 0, ease: Back.easeIn }, 1.8).set([topBuilding, tipBuilding], { autoAlpha: 0 }, 2.1).staggerTo(windows, 0.01, { autoAlpha: 0 }, -0.005, 2.1).fromTo(mainBuilding, 0.4, { drawSVG: "100%" }, { drawSVG: "50% 50%", ease: Power3.easeIn }, 1.9).set(baseBuilding, { autoAlpha: 0 }, 2.3).set(mainBuilding, { autoAlpha: 0 }, 2.3).to(verticalFrame, 0.4, { drawSVG: "0%", ease: Power2.easeIn }, 1.9).staggerTo(ticks, 0.01, { autoAlpha: 0 }, -0.03, 2).to(horizontalFrame, 0.2, { drawSVG: "0%", ease: Power2.easeIn }, 2);

  return tl;
}
"use strict";

function getSmartphoneDetailsTl() {

  var tl = new TimelineMax();

  tl.set(smartphoneBtn, { autoAlpha: 1 }, 0.3).fromTo(smartphoneBtn, 0.3, { drawSVG: "50% 50%" }, { drawSVG: "100%" }, 0.3).staggerTo(data, 0.01, { autoAlpha: 1 }, 0.1, 1).staggerTo(data, 0.7, { drawSVG: "0% 100%", ease: Power1.easeInOut }, 0.1, 0.9).staggerTo(data, 0.5, { drawSVG: "100% 100%", ease: Power1.easeIn }, 0.1, 1.4).to(smartphoneBtn, 0.3, { drawSVG: "50% 50%" }, 2).set(smartphoneBtn, { autoAlpha: 0 }, 2.2);

  return tl;
}
