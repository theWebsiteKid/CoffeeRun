// init API url
var url = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders';
// make GET request to server
$.ajax(url,  {
    method: 'GET',
    success: function(data) {
        console.log(data)
    }
});
// init global variables
var orders = [];
var orderForm = document.querySelector('.orderForm');
var container = document.querySelector('.orderList');
var listItem = document.createElement('li');
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
};
// store form values in new order object
var getFormValues = function () {
    // init local variables
    var coffee = document.querySelector('[name="coffee"]');
    var email = document.querySelector('[name="email"]');
    var size = document.querySelector('[name="size"]');
    var strength = document.querySelector('[name="strength"]');
    // build new order object
    var newOrder = {
        "coffee": coffee,
        "email": emailAddress,
        "size": size,
        "strength": strength
    };
    // return new order object
    // now other functions can use it!
    return newOrder;
};
// build DOM on page load
orders.forEach(function () {
    // load existing orders on page load
    loadOrder(orders);
    // append to unordered list
    listItem.textContent = `
        ${coffee}, ${email}, ${size}, ${strength}
    `;
    container.appendChild(listItem);
});
// push form input to orders list
// and persist to localStorage
orderForm.addEventListener('submit', function (event) {
    // prevent default form submit
    event.preventDefault();
    // push new order to orders array
    orders.push(newOrder);
    // persist to localStorage
    saveOrder(orders);
    // test!
    console.log(orders);
});