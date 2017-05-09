function animateLogo() {

  // CacheDOM
  var svg = document.querySelector("#svg"),
  all = svg.querySelector("#all"),
  line = svg.querySelector("#line"),
  symbol = svg.querySelector("#symbol"),
  particleContainer = svg.querySelector("#particles"),
  text0 = svg.querySelector("#WE"),
  text1 = svg.querySelector("#Construction"),
  mask = svg.querySelector("#text-mask"),
  qualityParticle = svg.querySelector("#quality-particle"),
  cloud2 = svg.querySelector("#cloud2"),
  cloud = svg.querySelector("#cloud"),
  verticalFrame = svg.querySelector("#vertical"),
  horizontalFrame = svg.querySelector("#horizontal"),
  mainBuilding = svg.querySelector("#main"),
  baseBuilding = svg.querySelector("#base"),
  topBuilding = svg.querySelector("#top"),
  tipBuilding = svg.querySelector("#tip"),
  maskStream1 = svg.querySelector("#data-mask1"),
  maskStream2 = svg.querySelector("#data-mask2"),
  maskStream3 = svg.querySelector("#data-mask3"),
  maskStream4 = svg.querySelector("#data-mask4"),
  smartphoneBtn = svg.querySelector("#button"),
  heartline1 = svg.querySelector("#heartline1"),
  heartline2 = svg.querySelector("#heartline2"),
  logoline1 = svg.querySelector("#logoline1"),
  logoline2 = svg.querySelector("#logoline2");

  var data = [];
  var ticks = [];
  var windows = [];
  var particles = [];

  for(var i = 0; i < 4; i++) { data[i] = svg.querySelector("#data" + (i+1)); }
  for(var i = 0; i < 12; i++) { ticks[i] = svg.querySelector("#measure-tick" + (i+1)); }
  for(var i = 0; i < 40; i++) { windows[i] = svg.querySelector("#window" + (i+1)); }

  function createParticles() {

    // Create particles
    for(var i = 0; i < 7; i++){

      var particle = new Particle(15, 300, 200);

      // Hide particle at birth
      particle.target.setAttribute("opacity", "0");

      // Append to DOM
      particle.appendTo(particleContainer);

      // Push to array
      particles.push(particle);
      
      // Set target in data object
      p[i].target = particles[i].target;
      
    } 
  }

  function setStart() {
    var lines = [heartline1, heartline2, logoline1, logoline2, smartphoneBtn, horizontalFrame, verticalFrame, mainBuilding, baseBuilding, topBuilding, tipBuilding];
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

  function setParticleBlueprint() {
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;

      TweenMax.set(target, {
        x: obj.bp.xMax*0.5,
        y: obj.bp.yMax*0.5,
        scale: 0,
        transformOrigin: "center",
        fill: obj.bp.fill,
        autoAlpha: 1
      });
    }
  }

  function setParticleSmartphone() {
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;

      TweenMax.set(target, {
        x: obj.sp.xMax*0.4,
        y: obj.sp.yMax*0.4,
        scale: 0,
        transformOrigin: "center",
        fill: obj.sp.fill,
        autoAlpha: 1
      });
    }
  }

  function setParticleHeart() {
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;

      TweenMax.set(target, {
        x: obj.h.xMax*0.7,
        y: obj.h.yMax*0.7,
        scale: 0,
        transformOrigin: "center",
        fill: obj.h.fill,
        autoAlpha: 1
      });
    }
  }

  function animateParticleBlueprint() {
    
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;
    
      var tl = new TimelineMax();

      tl
        .add("start")

        // In
        .to(target, 0.7, { x: obj.bp.xMax, y: obj.bp.yMax, scale: obj.bp.sMax, ease: Power4.easeOut }, "start")
        
        // Act
        .to(target, 1.3, { x: obj.bp.xMax*0.95, y: "-=15", ease: Power1.easeIn })
        
        // Out
        .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2")
        .to(target, 0.1, { autoAlpha: 0 }, "start =+2.2")
      ;
    } 
  }

  function animateParticleSmartphone() {
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;
    
      var tl = new TimelineMax();

      tl
        .add("start")

        // In
        .to(target, 0.7, { x: obj.sp.xMax*0.8, y: obj.sp.yMax*0.8, scale: obj.sp.sMax, ease: Power4.easeOut }, "start")
        
        // Act
        .to(target, 1.5, { x: "+=20", ease: Power1.easeIn })
        
        // Out
        .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2")
        .to(target, 0.1, { autoAlpha: 0 }, "start =+2.2")
      ;
    }
  }

  function animateParticleHeart() {
    for(var i = 0; i < 7; i++){
      var obj = p[i];
      var target = obj.target;
    
      var tl = new TimelineMax();

      tl
        .add("start")

        // In
        .to(target, 0.7, { x: obj.h.xMax*0.95, y: obj.h.yMax*0.95, scale: obj.h.sMax, ease: Power4.easeOut }, "start")
        
        // Act
        .to(target, 1.3, { x: obj.h.xMax*0.85, y: obj.h.yMax*0.85, ease: Power1.easeIn })
        .to(target, 0.2, { scale: "+=0.2", repeat: 1, yoyo:true, ease: Power1.easeOut, repeatDelay: 0.05 }, "start =+1.15")
        
        // Out
        .to(target, 0.3, { y: 100, ease: Power1.easeIn }, "start =+2")
        .to(target, 0.1, { autoAlpha: 0 }, "start =+2.2")
      ;
    }
  }

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

  // Initiate
  createParticles();
  setStart();
  playTimeline();
}