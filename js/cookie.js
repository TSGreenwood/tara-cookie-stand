'Use Strict';

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores =[];

var Store = function (location, minCust, maxCust, aveCookSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiesHourly = [];
  this.total = 0;
  this.ranCustAvg = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.projectedCookie = function() {
    for (var i=0; i < hoursOperation.length; i++) {
      this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
    }
  };
  this.totalProjected = function() {
    for (var i = 0; i < this.cookiesHourly.length; i++) {
      this.total = this.total+ this.cookiesHourly[i];
    }
  };
  this.render = function() {
    this.ranCustAvg();
    this.projectedCookie();
    this.totalProjected();
    allStores.push(this);
    var row = document.createElement('tr');
    var col = document.createElement('td');
    col.textContent = this.location;
    row.appendChild(col);
    // for loop for arr
    // for (var i = 0; i< allStores.length; i++) {
    //   console.log(allStores[i]);
    //   for (var j = 0; j < hoursOperation.length; j++) {
    //     console.log(hoursOperation[j]);
    //   }
    }

    // creating totals column
    col = document.createElement('td');
    col.textContent = this.total;
    row.appendChild(col);

    var blah  = document.getElementById('projections');
    blah.appendChild(row);

  };
  this.render();


};

new Store('Seattle Center', 11,38, 3.7);
new Store('a', 1,2,3);
new Store('1st and Pike', 3, 24, 1.2);



// 'Use Strict';

// var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var allStores =[];

// var Store = function (location, minCust, maxCust, aveCookSale) {
//   this.location = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.aveCookSale = aveCookSale;
//   this.cookiesHourly = [];
//   this.total = 0;
//   // get our ave # of customers to multiply by aveCookieSale later.
//   this.ranCustAvg = function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   };
//   // get our ave # of customers to multiply by aveCookieSale later.
//   this.projectedCookie = function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }
//   };
//   // Add all the hourly totals to give daily totals for each location.
//   this.totalProjected = function() {
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//   };
//   this.render = function() {
//     this.ranCustAvg();
//     this.projectedCookie();
//     this.totalProjected();
//     allStores.push(this);
//     var row = document.createElement('tr');
//     var col = document.createElement('td');
//     col.textContent = this.location;
//     row.appendChild(col);
//     // for loop for arr
//     // for (var j = 0; i < allStores.length; j++) {

//     //   for (var i = 0; i < hoursOperation.length; i++) {

//     //   }
//     // }

//     // creating totals column
//     col = document.createElement('td');
//     col.textContent = this.total;
//     row.appendChild(col);

//     var blah  = document.getElementById('projections');
//     blah.appendChild(row);

//   };
//   this.render();
// }; //end constructor

// new Store('Seattle Center', 11,38, 3.7);
// new Store('a', 1,2,3);
// new Store('1st and Pike', 3, 24, 1.2);


