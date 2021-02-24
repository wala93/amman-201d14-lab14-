# amman-201d14-lab14-
Naeem was work with my colleague in this lab 14 to solve some problem and know if I can work with a team and What information can I access and help others
so thank you for all of them I have fun and a good time
1- Naeem
2- Anagheem
3- Khaled Bassam
4- Mohammad AL_Khasawneh
# who we solve the problem and what we learn from it
1. for this problem
function populateForm() {
    const selectElement = document.getElementById('items');
    for (let i in Product.allProducts) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute("value", Product.allProducts[i].name);
        optionElement.textContent = Product.allProducts[i].name;
        selectElement.appendChild(optionElement);
    }
}
let's say Naeem start to solve it by making the first step so I tell them we want to create a new element tag in the javascript because we want to have it inside the select item and when we handle click in the scroll for the item to show all the products we have in this scroll.
so the first step was to create a new variable and in this variable, we call the select element to create inside the option and we used for loop to have all the Item product name inside the Item scroll 
2. the second problem
function handleSubmit(event) {
    event.preventDefault();
    // Do all the things ...
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();
}
for this problem me and Anageem take the control because my network was unstable so Mohammad AL_Khasawneh tell us to put the (event.preventDefault();) for solve this problem just and we go for the anther one
3. the three problem
function addSelectedItemToCart() {
    let selectElement = document.getElementById('items');
    let pickedItem = selectElement.options[selectElement.selectedIndex.value.toLowerCase();
    let quantitySelected = document.getElementById('quantity').value;
    cart.items.push(new CartItem(pickedItem, quantitySelected));
    console.log(cart);
}
I solves this problem and Anagheem and Khaled help me with this one by we use to create a new array like global (that was Khaled idea) and Naeem and Anagheem tell me that.
and inside the function we decleared variable we have to create before to put it in the local storage to save all the data in the local browser by we use (    pickedItem = localStorage.getItem('cart'); JSON.parse(pickedItem); )
and we try it by console it
4. the fourth problem
// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter = 0;
function updateCounter() {
    counter++;
    let spanEl = document.getElementById('itemCount');
    spanEl.textContent = counter;
}
we solve this problem by we create and variable global one and but for it zero value to make it the counter for the all product in will select be the user the browser and increase in the page in the cart (the card in the head of the page in the right corner)
we make for it increase by one every time he picks the product  and put a new variable to show the result in the HTML file by getelementbyid for the element in the HTML file and definition this counter for the web page


the next problem we tried to solve it ,but we couldn't ,it was just trying 