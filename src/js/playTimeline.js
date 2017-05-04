function playTimeline() {
  
  var tl = new TimelineMax({ }).timeScale(1);

  tl
    .add("intro")
    .from(line, 0.8, { drawSVG:"0", ease: Power2.easeIn }, "intro")

    .add("blueprint")
    .add(setParticleBlueprint)
    .to(line, 0.8, { morphSVG: blueprint, ease: Back.easeOut }, "blueprint")
    .add(animateParticleBlueprint, "blueprint =+0.05")
    .to(line, 0.5, { morphSVG: blueprintFoundation, ease: Back.easeIn }, "blueprint =+1.8")

    .add("smartphone")
    .add(setParticleSmartphone)
    .set(line, { morphSVG: smartphoneFoundation })
    .to(line, 0.8, { morphSVG: smartphone, ease: Back.easeOut }, "smartphone")
    .add(animateParticleSmartphone, "smartphone =+0.05")
    .to(line, 0.5, { morphSVG: smartphoneFoundation, ease: Back.easeIn }, "smartphone =+1.8")

    .add("heart")
    .add(setParticleHeart)
    .set(line, { morphSVG: heartFoundation })
    .to(line, 0.8, { morphSVG: heart, ease: Back.easeOut }, "heart")
    .add(animateParticleHeart, "heart =+0.05")
    .to(line, 0.5, { morphSVG: heartFoundation, ease: Back.easeIn }, "heart =+1.8")

    .set(line, { morphSVG: logoFoundation })
    .to(line, 2, { morphSVG: logo, ease: Power4.easeOut })

    .add("gopro", "=-1.3")
    .to(mask, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
    .to(symbol, 0.7, { x: 0, scale: 1, ease: Power3.easeIn }, "gopro")
    .to(text0, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
    .to(text1, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
  ;
}