'Use Strict';

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores =[];
var storeTable = document.getElementById('projections');
console.log(storeTable);

var Store = function (location, minCust, maxCust, aveCookSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiesHourly = [];
  this.total = 0;
  allStores.push(this);

  this.projectedCookie();
  this.totalProjected();
  this.renderInnerTableData();
};

Store.prototype.ranCustAvg = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.projectedCookie = function() {
  for (var i = 0; i < hoursOperation.length; i++) {
    this.cookiesHourly.push(Math.floor(this.ranCustAvg() * this.aveCookSale));
  }
};

Store.prototype.totalProjected = function() {
  for (var i = 0; i < this.cookiesHourly.length; i++) {
    this.total = this.total+ this.cookiesHourly[i];
  }
};

Store.prototype.renderInnerTableData = function() {
// create row
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;

  trEl.appendChild(tdEl);

  for (var i = 0; i < this.cookiesHourly.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesHourly[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.total;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

function headerRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Stores';

  trEl.appendChild(tdEl);

  for (var i = 0; i < hoursOperation.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hoursOperation[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';

  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

function footerRow() {
  var hourlyTotals = [];
  var sumOfSums = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
  // iterate across the rows
  for (var i = 0; i < hoursOperation.length; i++) {
    var hourlyTotal = 0;
    // iterate down the columns
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal = hourlyTotal + allStores[j].cookiesHourly[i];
    }
    hourlyTotals.push(hourlyTotal);
  }
  for (var k = 0; k < hourlyTotals.length; k++) {
    sumOfSums += hourlyTotals[k];
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[k];
    trEl.appendChild(tdEl);
  }
  console.log(hourlyTotals);
  tdEl = document.createElement('td');
  tdEl.textContent = sumOfSums;
  trEl.appendChild(tdEl);
}

headerRow();

new Store('1st and Pike', 3, 24, 1.2);
new Store('SeaTac', 23, 65, 6.3);
new Store('Seattle Center', 11,38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

footerRow();

