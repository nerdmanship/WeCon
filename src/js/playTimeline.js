function playTimeline() {

    var heartlines = [heartline1, heartline2];
    var beatlines = [beatline1, beatline2];
    var logolines = [logoline1, logoline2];

    var tl = new TimelineMax({ }).timeScale(1);

    tl
        .add("intro")
        .from(line, 0.8, { drawSVG:"0", ease: Power2.easeIn }, "intro")

        // Up BLUEPRINT
        .add("blueprint")
        .add(setParticleBlueprint)
        .to(line, 0.8, { morphSVG: blueprint, ease: Back.easeOut }, "blueprint")
        .add(animateParticleBlueprint, "blueprint =+0.05")

        // Details BLUEPRINT
        .add(getBlueprintDetailsTl, "blueprint")

        // Quality particle BLUEPRINT
        .to(qualityParticle, 0.4, { scale: 1, repeat: 1, yoyo:true, ease: Power2.easeOut }, "blueprint =+1.4")
        .to(qualityParticle, 0.4, { y: "-=30", repeat: 1, yoyo:true, ease: Power1.easeOut }, "blueprint =+1.4")

        // Down BLUEPRINT
        .to(line, 0.5, { morphSVG: blueprintFoundation, ease: Back.easeIn }, "blueprint =+1.8")

        // Up SMARTPHONE
        .add("smartphone")
        .add(setParticleSmartphone)
        .set(line, { morphSVG: smartphoneFoundation })
        .to(line, 0.8, { morphSVG: smartphone, ease: Back.easeOut }, "smartphone")
        .add(animateParticleSmartphone, "smartphone =+0.05")

        // Data stream SMARTPHONE
        .to(maskStream4, 0.5, { x: 185, ease: Power1.easeOut }, "smartphone =+1")
        .to(maskStream1, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7")
        .to(maskStream2, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7")
        .to(maskStream3, 0.5, { x: 185, ease: Power1.easeIn }, "smartphone =+1.7")
        
        // Details SMARTPHONE
        .add(getSmartphoneDetailsTl, "smartphone")

        // Down SMARTPHONE
        .to(line, 0.5, { morphSVG: smartphoneFoundation, ease: Back.easeIn }, "smartphone =+1.8")

        // Up HEART
        .add("heart")
        .add(setParticleHeart)
        .set(line, { morphSVG: heartFoundation })
        .to(line, 0.8, { morphSVG: heart, ease: Back.easeOut }, "heart")
        .add(animateParticleHeart, "heart =+0.05")

        // Draw HEART
        .to(heartlines, 0.5, {drawSVG: "100%", ease: Power2.easeInOut }, "heart =+0.2")

        // Beat HEART
        .to(line, 0.2, { morphSVG: beat, repeat: 1, yoyo:true, ease: Power1.easeOut, repeatDelay: 0.05 }, "heart =+1.2")
        .staggerTo(heartlines, 0.2, {cycle: { morphSVG: beatlines }, repeat: 1, yoyo:true, ease: Power1.easeOut, repeatDelay: 0.05 }, 0, "heart =+1.2")

        // Down HEART
        .to(line, 0.5, { morphSVG: heartFoundation, ease: Back.easeIn }, "heart =+1.8")
        .to(heartline1, 0.3, {drawSVG: "100% 100%", ease: Power1.easeIn }, "heart =+1.8")
        .to(heartline2, 0.3, {drawSVG: "0%", ease: Power1.easeIn }, "heart =+1.8")

        // Up LOGO
        .add("logo")
        .set(line, { morphSVG: logoFoundation })
        .to(line, 1.5, { morphSVG: logo, ease: Power2.easeOut }, "logo")
        .to(logolines, 1.5, { drawSVG: "100%", ease: Power1.easeOut }, "logo")

        // Reveal
        .add("gopro")
        .to(mask, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
        .to(symbol, 0.7, { x: 0, scale: 1, ease: Power3.easeIn }, "gopro")
        .to(text0, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
        .to(text1, 0.7, { x: 0, ease: Power3.easeIn }, "gopro")
    ;
}