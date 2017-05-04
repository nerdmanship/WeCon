function setStart() {

  TweenMax.set(line, { attr: {d: blueprintFoundation} });
  TweenMax.set([text0, text1], { x: -500, autoAlpha: 1 });
  TweenMax.set(symbol, { scale: 1.5, transformOrigin: "bottom left", x: 110 });
  TweenMax.set(mask, { x: 350 });
  TweenMax.set(details, { autoAlpha: 0 });

}