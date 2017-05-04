function setStart() {
  var lines = [heartline1,heartline2,logoline1,logoline2];

  TweenMax.set(line, { attr: {d: blueprintFoundation} });
  TweenMax.set([text0, text1], { x: -500, autoAlpha: 1 });
  TweenMax.set(symbol, { scale: 1.5, transformOrigin: "bottom left", x: 110 });
  TweenMax.set(mask, { x: 350 });
  TweenMax.set(details, { autoAlpha: 1 });
  TweenMax.set(qualityParticle, { scale: 0, y: 20, transformOrigin: "bottom center" });
  TweenMax.set(lines, { drawSVG: "0%" });
  TweenMax.set(heartline2, { drawSVG: "100% 100%" });
}