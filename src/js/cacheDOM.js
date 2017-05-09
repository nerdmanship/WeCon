function cacheDOM() {

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
  maskStream1 = svg.querySelector("#data-mask1"),
  maskStream2 = svg.querySelector("#data-mask2"),
  maskStream3 = svg.querySelector("#data-mask3"),
  maskStream4 = svg.querySelector("#data-mask4"),
  smartphoneBtn = svg.querySelector("#button"),

  // Heart
  heartline1 = svg.querySelector("#heartline1"),
  heartline2 = svg.querySelector("#heartline2"),

  // Logo
  logoline1 = svg.querySelector("#logoline1"),
  logoline2 = svg.querySelector("#logoline2")
  ;


  for(var i = 0; i < 4; i++) {
    data[i] = svg.querySelector("#data" + (i+1));
  }


  for(var i = 0; i < 12; i++) {
    ticks[i] = svg.querySelector("#measure-tick" + (i+1));
  }


  for(var i = 0; i < 40; i++) {
    windows[i] = svg.querySelector("#window" + (i+1));
  }

    return {
      svg: svg
    }
}