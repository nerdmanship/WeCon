function getSmartphoneDetailsTl() {

  var tl = new TimelineMax();
  
  tl
    .set(smartphoneBtn, { autoAlpha: 1 }, 0.3)
    .fromTo(smartphoneBtn, 0.3, { drawSVG: "50% 50%"}, { drawSVG: "100%"}, 0.3)

    .staggerTo(data, 0.01, { autoAlpha: 1}, 0.1, 1)
    .staggerTo(data, 0.7, { drawSVG: "0% 100%", ease: Power1.easeInOut}, 0.1, 0.9)
    .staggerTo(data, 0.5, { drawSVG: "100% 100%", ease: Power1.easeIn}, 0.1, 1.4)

    .to(smartphoneBtn, 0.3, { drawSVG: "50% 50%"}, 2)
    .set(smartphoneBtn, { autoAlpha: 0 }, 2.2)
  ;

  return tl;
}