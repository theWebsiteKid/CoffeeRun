//
var orders = [
    { email:'xduncan1@gmail.com', caffiene:'100' },
    { email: 'xduncan@tuta.io', caffiene: '50' }
];
// init order
var order = document.createElement('p');
order.classList.add('order')
// init order container
var orderContainer = document.createElement('div');
orderContainer.appendChild('order')
orderContainer.classList.add('orderContainer');
// init order section
var orderSection = document.querySelector('.orderSection');
orderSection.appendChild('orderContainer');
// save to localStorage
var ordersAsString = localStorage.setItem('coffee-orders', JSON.stringify(orders));
// retrieve from localStorage
localStorage.getItem('coffee-orders', JSON.parse(orders));