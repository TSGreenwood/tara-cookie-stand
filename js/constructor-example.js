'use strict';
// constructor functions to make goat instances
function Goat(filepath, description) {
  this.url = filepath;
  this.altText = description;
  Goat.allGoats.push(this);
} //end constructor

//store those objects in an array
Goat.allGoats = [];

// randomly generate a number
Goat.randomNum = function() {
  var random = Math.random() * Goat.allGoats.length;
  var roundedDown = math.floor(random);
  return roundedDown;
};

// make our randomIndex number to feed a position in array Goat.allGoats
Goat.renderGoat = function() {
  var randomIndex = Goat.randomNum();
  var randomGoat = Goat.allGoats[randomIndex];
  // randomGoat won't be an array, it'll be a new goat for each event.

  // modify the alt attribute
  Goat.imgElement.alt =randomGoat.altText;
  // modify the src attribute
  Goat.imgElement.url =randomGoat.altText;


};


//make new instances, remember that your filepath starts at the HTML document, NOT the js file. This means you don't need ..slash
new Goat('img filepath, description');
new Goat('img filepath, description');
new Goat('img filepath, description');



// render a random goat on page load:
Goat.renderGoat();

// listen to the image element and add event listener
Goat.imgElement.addEventListener('click', Goat.randomGoat);
