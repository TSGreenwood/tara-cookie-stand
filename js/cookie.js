'Use Strict';

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(hoursOperation.length);
//sample array [seaTac, # of hours open, min customers/day, max customers/day, avgCookieSale, ranCustAvg, projectedCookies(based on ranCustAvg)
var firstPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  aveCookSale: 1.2,
  cookiesHourly: [],
  ranCustAvg: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  projectedCookie: function() {
    for (var i=0; i < hoursOperation.length; i++) {
      this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
    }

  },
  //let's render this as an ul in html
  render: function() {
    var pikeList = document.getElementById('pike');
    for (var i = 0; i < hoursOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
      console.log(liEl);
      pikeList.appendChild(liEl);
    }


  }
};

firstPike.projectedCookie();
firstPike.render();
console.log(firstPike.cookiesHourly);
// var minCust =  3;
// var maxCust = 24;
// var aveCookSale = 1.2;

// function ranCustAvg() {
//   Math.floor(  Math.random() * (maxCust - minCust) + minCust) * aveCookSale);
//   console.log(ranCustAvg);
//   var ranCA= (ranCustAvg);
//   console.log(ranCA);
//   return ranCustAvg;
// }
// ranCustAvg();

//based on that customer value, I can multiply it by avgCookieSale to return projectedCookies.

//Next, I need to create an <ul> that iterates projectedCookies over each i within hoursOperation.

//Don't declare any variables within for loops. Get a random, make the li, content = random from above, once per hour
