
var animateLogo = (function(parent, options){

  // Inject graphics in passed div
  injectHtml(parent);

  // Create references to elements to be animated
  cacheDOM();
  
  // Create particle elements
  createParticles();

  // Set start values
  setStart();

  // Start the timeline
  playTimeline(options);

});
