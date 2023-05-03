// Disable scrolling for 5 seconds after page load
window.onload = function() {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    // Wait for 5 seconds
    setTimeout(function() {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }, 5000);
  };





  const div = document.querySelector('div')
  for (let i = 0; i < 1; i++) {
    const p = document.createElement('p')
    p.textContent = i
    div.appendChild(p)
  }
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }






  // Get the video element
var videouvod = document.getElementById("VideoHero");

var videopotom = document.getElementById("Kuk");

// Get the div element
var skrol = document.getElementsByClassName("ScrollHero");

videopotom.style.display = 'none';
// Add event listener for when the video ends
videouvod.addEventListener('ended', function() {
  
// Remove the event listener to prevent it from being triggered multiple times
videouvod.removeEventListener('ended', arguments.callee);  
  
    // Hide the video
  videouvod.style.display = 'none';

  // Hide the scrollbar
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.scroll = "no";
  document.documentElement.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = 'scroll';


  // Show the second video
videopotom.style.display = 'block';
    




    skrol.style.display = 'block';

});







//UVOD=text
// Get the text element
var uvod = document.getElementById("Text");

// Wait for 3 seconds
setTimeout(function() {
  // Add CSS class to animate opacity
  uvod.classList.add("fade-in");
}, 3500);







//KONEC

const intro = document.querySelector('.hero');
const video = intro.querySelector("Kuk");
const text = intro.querySelector("h3");
//END SECTION
const section = document.querySelector(".ScrollHero");
const end = section.querySelector("h3");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//SCENES
const scene = new ScrollMagic.Scene({
    duration:500,
    triggerElemnt: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//VIDEO_animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    Kuk.currentTime = delay;
}, 33.3);