function setStart() {
  var lines = [ heartline1, heartline2, logoline1, logoline2, smartphoneBtn, horizontalFrame, verticalFrame, mainBuilding, baseBuilding, topBuilding, tipBuilding ];
  var clouds = [cloud, cloud2];

  // Reveal scene
  TweenMax.set(all, { autoAlpha: 1 });

  // First path for main line
  TweenMax.set(line, { attr: {d: blueprintFoundation} });

  // Start position and scale for everything but texts
  TweenMax.set(symbol, { scale: 1.5, transformOrigin: "bottom left", x: 110 });
  
  // Start position for texts and mask
  TweenMax.set([text0, text1], { x: -500, autoAlpha: 1 });
  TweenMax.set(mask, { x: 350 });

  // Start position for blueprint details
  TweenMax.set([ticks, windows], { autoAlpha: 0 });
  TweenMax.set(clouds, { scale: 0, transformOrigin: "center"});
  TweenMax.set(cloud, { x: 17 });
  TweenMax.set([baseBuilding, mainBuilding, topBuilding,tipBuilding], { autoAlpha: 0});
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