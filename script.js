// we'd have a function defined for each quantity
// we'd use a query selector all to get all of elments with class quantity
// we store all of them in a variable which we will append the event listener on
// if e.target (the element clicked on) is equal to any of the quantities, then a function will be called and run.

let menuBar = document.querySelector('.hamburger-icon');
let sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', function() {
    menuBar.classList.toggle('active');
    sideBar.classList.toggle('active');
});

let allQuantity = document.querySelectorAll('.quantity');

allQuantity.forEach((quantity) => {
    quantity.addEventListener('click', function(e){
        if(e.target.textContent == 'Length') {
            return lengthConverter();
        }
    }); 
}); 

function lengthConverter() {
    console.log('Hi, I am the length converter function');
}