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
    for (var j = 0; 0 < allStores.length; j++) {

      for (var i = 0; 0 < hoursOperation.length; i++) {

      }

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


// this.ranCustAvg();
// this.projectedCookie();
// this.totalProjected();
// console.log(this);
// allStores.push(this);

//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   aveCookSale: 3.7,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var seattleCenterList = document.getElementById('seattleCenter');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       seattleCenterList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     seattleCenterList.appendChild(liTot);
//   }
// };
















// var allHoursOperation = hoursOperation.push('6am through 8pm');
// console.log(allHoursOperation);

// var storeTable = document.getElementById('projections');

// function TestConst() {
//   this.storeName = storeName;
//   this.hours = hoursOperation;
// }

// TestConst.allTestConst = [];

// // TestConst.prototype.render = function () {}
// for (var i = 0; i < allHoursOperation.length; i++); {
//   var trEl = document.createElement('tr');
//   trEl.textContent = allHoursOperation[i];
//   newRow.appendChild(trEl);
// }
// storeTable.appendChild(newRow);

// function CookieStore() {
//   this.storeName = storeName;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookSale = avgCookSale;
//   this.hours = allHoursOperation;
//   this.total = dailyTotal;
// }








// Day 6 work below
// var firstPike = {
//   location: '1st and Pike',
//   minCust: 3,
//   maxCust: 24,
//   aveCookSale: 1.2,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var pikeList = document.getElementById('pike');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       pikeList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     pikeList.appendChild(liTot);
//   }
// };

// var seaTac = {
//   location: 'SeaTac Airport',
//   minCust: 23,
//   maxCust: 65,
//   aveCookSale: 6.3,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var seaTacList = document.getElementById('seaTac');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       seaTacList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     seaTacList.appendChild(liTot);
//   }
// };

// var seattleCenter = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   aveCookSale: 3.7,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var seattleCenterList = document.getElementById('seattleCenter');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       seattleCenterList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     seattleCenterList.appendChild(liTot);
//   }
// };

// var capitalHill = {
//   location: '1st and Pike',
//   minCust: 20,
//   maxCust: 38,
//   aveCookSale: 2.3,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i=0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var capitalHillList = document.getElementById('capitalHill');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       capitalHillList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     capitalHillList.appendChild(liTot);
//   }
// };

// var alki = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   aveCookSale: 4.6,
//   cookiesHourly: [],
//   total: 0,
//   ranCustAvg: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },
//   projectedCookie: function() {
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
//     }

//   },
//   totalProjected: function(){
//     for (var i = 0; i < this.cookiesHourly.length; i++) {
//       this.total = this.total+ this.cookiesHourly[i];
//     }
//     console.log(this.total);
//   },
//   //let's render this as an ul in html
//   render: function() {
//     var alkiList = document.getElementById('alki');
//     for (var i = 0; i < hoursOperation.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOperation[i] + ': bake ' + this.cookiesHourly[i] + ' cookies';
//       alkiList.appendChild(liEl);
//     }
//     var liTot = document.createElement('li');
//     liTot.textContent = 'Daily total: ' + this.total;
//     alkiList.appendChild(liTot);
//   }
// };
// firstPike.projectedCookie();
// firstPike.totalProjected();
// firstPike.render();
// seaTac.projectedCookie();
// seaTac.totalProjected();
// seaTac.render();
// seattleCenter.projectedCookie();
// seattleCenter.totalProjected();
// seattleCenter.render();
// capitalHill.projectedCookie();
// capitalHill.totalProjected();
// capitalHill.render();
// alki.projectedCookie();
// alki.totalProjected();
// alki.render();

