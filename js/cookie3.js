'Use Strict';

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores =[];
// var blah  = document.getElementById('projections');


function Store(location, minCust, maxCust, aveCookSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiesHourly = [];
  this.total = 0;
  // get our ave # of customers to multiply by aveCookieSale later.
  this.ranCustAvg = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  // multiply those random # of customers by aveCookie Sale. This will give us an estimate of how many cookies to bake each hour.
  this.projectedCookie = function() {
    for (var i=0; i < hoursOperation.length; i++) {
      this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
    }
  };
  // This adds all the hourly totals to give daily totals for each location.
  this.totalProjected = function() {
    for (var i = 0; i < this.cookiesHourly.length; i++) {
      this.total = this.total+ this.cookiesHourly[i];
    }
  };
  // now,let's call those methods so we can use them, then we'll push those objects into allStores, the array of all those objects.
  this.ranCustAvg();
  this.projectedCookie();
  this.totalProjected();
  allStores.push();
} // end of constructor


Store.prototype.render = function() {
  var blah  = document.getElementById('projections');
  blah.appendChild(row);
  var row = document.createElement('tr');
  var col = document.createElement('td');
  col.textContent = this.location;
  row.appendChild(col);
  // for loop for arr

  for (var z = 0; z < this.hoursOperation; z++) {
    document.createElement('td');
    console.log(z);
    col.textContent = this.cookiesHourly[z];
    row.appendChild(col);
  }

  // creating totals column
  col = document.createElement('td');
  col.textContent = this.total;
  row.appendChild(col);

  this.render();
};

