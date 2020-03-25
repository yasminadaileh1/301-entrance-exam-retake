'use strict'
var orderArr = [];
function Order( foodType , quantity){
    this.foodType = foodType ;
    this.quantity = quantity;
    orderArr.push(this);
    setItem();
}

var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var orderdItem = event.target.orderd.value;
    var quan = event.target.quantity.value;
    new Order(orderdItem,quan);
    // getItem();
    console.log('hello')
});
new Order( 'pizza', 2);
console.log(orderArr);
 
var tableOrder = document.getElementById('tableOrder');
var tableEl = document.createElement('table');
tableOrder.appendChild(tableEl);
var header = document.createElement('thead');
tableEl.appendChild(header);
var th1El = document.createElement('th');
th1El.textContent = 'item';
header.appendChild(th1El);
var th2El = document.createElement('th');
th2El.textContent = 'quantity';
header.appendChild(th2El);
var trEl = document.createElement('tbody');
tableEl.appendChild(trEl);

function render(){
    for(var i =0 ; i < orderArr.length ; i++){

        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = orderArr[0];
        getItem();
        console.log('hi');
    }

}

render();

function setItem(){

    var save = JSON.stringify(orderArr);
    localStorage.setItem('objects', save);
}
function getItem (){
    var objects = localStorage.getItem('objects');
    if(objects){
        orderArr = JSON.parse(objects);
        render();
    }
}

getItem();
render();