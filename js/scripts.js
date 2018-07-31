// init global variables
var orders = [];
var orderForm = document.querySelector('.orderForm');
var container = document.querySelector('.orderList');
// save to localStorage
var saveOrder = function() {
    localStorage.setItem('coffeeOrder', JSON.stringify(orders));
};
// retrieve from localStorage
var loadOrder = function () {
    orders = JSON.parse(localStorage.getItem('coffeeOrder'));
    if (orders === null) {
        orders = [];
    }
    console.log(orders);
};
// load orders on page load
loadOrder(orders);
console.log("2" + orders);
// first function builds DOM elements on load
order.forEach( function (element) {
    // init local variables
    var order = document.querySelector('[name="order"]').value;
    var email = document.querySelector('[name="email"]').value;
    var size = document.querySelector('[name="size"]:checked').value;
    var rating = document.querySelector('[name="rating"]').value;
    var pendingOrder = {"order": order, "email": email, "size": size, "rating": rating};
    // append to unordered list
    var listItem = document.createElement('li')
    listItem.textContent = `${order}, ${email}, ${size}, ${rating}`;
});
// Push form input to orders list
// and persist to localStorage
orderForm.addEventListener('submit', function (event) {
    // prevent devault form submit
    event.preventDefault();
    container.appendChild(listItem);
    orders.push(pendingOrder);
    saveOrder(orders);
    // test!
    console.log(orders);
});