function getBlueprintDetailsTl() {

  var tl = new TimelineMax();
  
  tl
    // Up
    .to(horizontalFrame, 0.8, { drawSVG: "100%", ease: Power4.easeOut }, 0)
    .to(verticalFrame, 0.6, { drawSVG: "100%", ease: Power2.easeOut }, 0)
    .staggerTo(ticks, 0.01, { autoAlpha: 1 }, 0.035, 0)

    .staggerTo([cloud, cloud2], 0.5, { scale: 1, ease: Back.easeOut }, -0.1, 0.2)

    .set(mainBuilding, { autoAlpha: 1}, 0.6)
    .fromTo(mainBuilding, 1, { drawSVG: "50% 50%"}, { drawSVG: "100%", ease: Power1.easeIn }, 0.5)

    .set(baseBuilding, { autoAlpha: 1}, 0.8)
    .fromTo(baseBuilding, 0.3, { drawSVG: "50% 50%"}, { drawSVG: "100%", ease: Power1.easeOut }, 0.9)
    .staggerTo(windows, 0.01, { autoAlpha: 1 }, 0.015, 1)

    .set([topBuilding,tipBuilding], { autoAlpha: 1}, 1.4)
    .fromTo([topBuilding,tipBuilding], 0.2, { drawSVG: "50% 50%"}, { drawSVG: "100%", ease: Power1.easeInOut }, 1.4)

    // Down
    .to([cloud, cloud2], 0.5, { y: 100, scale: 0, ease: Back.easeIn }, 1.8)
    
    .set([topBuilding,tipBuilding], { autoAlpha: 0 }, 2.1)
    .staggerTo(windows, 0.01, { autoAlpha: 0 }, -0.005, 2.1)
    .fromTo(mainBuilding, 0.4, { drawSVG: "100%"}, { drawSVG: "50% 50%", ease: Power3.easeIn }, 1.9)
    .set(baseBuilding, { autoAlpha: 0}, 2.3)
    .set(mainBuilding, { autoAlpha: 0}, 2.3)
    .to(verticalFrame, 0.4, { drawSVG: "0%", ease: Power2.easeIn }, 1.9)
    .staggerTo(ticks, 0.01, { autoAlpha: 0 }, -0.03, 2)
    .to(horizontalFrame, 0.2, { drawSVG: "0%", ease: Power2.easeIn }, 2)
  ;

  return tl;
}