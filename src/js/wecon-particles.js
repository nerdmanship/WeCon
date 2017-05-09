function createParticles() {

  var count = 7;
  var parentContainer = svg.querySelector("#particles");
  var particles = [];
  
  // Create X amount of particles
  for(var i = 0; i < count; i++){
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
  for(var i = 0; i < count; i++){
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
  for(var i = 0; i < count; i++){
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
  for(var i = 0; i < count; i++){
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
  
  for(var i = 0; i < count; i++){
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
  for(var i = 0; i < count; i++){
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
  for(var i = 0; i < count; i++){
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