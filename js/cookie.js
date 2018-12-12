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
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';

  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

headerRow();



new Store('Seattle Center', 11,38, 3.7);
new Store('a', 1,2,3);
new Store('1st and Pike', 3, 24, 1.2);



