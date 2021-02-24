/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optinElement= document.createElement('option');
    selectElement.appendChild(optinElement);
    optinElement.textContent=Product.allProducts[i].name;

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
   event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
let pickedItem=[];
function addSelectedItemToCart() { 
   pickedItem=localStorage.getItem('cart');
  JSON.parse(pickedItem);
  console.log(pickedItem);

  }


  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
// }
let counter= 0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
counter++;
let spanEl=document.getElementById('itemCount');
spanEl.textContent=counter;

 }







// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  var selectElement = document.getElementById('items');
  var pickedItem = selectElement.options[selectElement.selectedIndex].value.toLowerCase();
  var quantitySelected = document.getElementById('quantity').value;
  var previewElement = document.getElementById('cartContents');
  previewElement.innerHTML='';
  var ulEl = document.createElement('ul');
  for (var i in cart.items) {
    var liEl = document.createElement('li');
    liEl.textContent = 'product: ' + cart.items[i].product + ', quantity: ' + cart.items[i].quantity; 
    ulEl.appendChild(liEl);
  }
  previewElement.appendChild(ulEl);
}
//   let divElement=document.getElementById('cartContents');
//   let ulElement=document.createElement('ul');
//   divElement.appendChild(ulElement);
//   let liEl;
//   for (let i=0;i<=pickedItem.length;i++){

//  liEl = document.createElement('li');
//   ulElement.appendChild(liEl);
//  liEl.textContent=pickedItem[i] ;

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
// }


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
