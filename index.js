// Side panel

const hamburgerBtn = document.getElementById("hamburger_button");
const crossBtn = document.getElementById("cross_button");
let sidePanel = document.getElementById("side_panel");

function openSidePanel() {
    sidePanel.style.transform = "translateX(0%)";
}

function closeSidePanel() {
    sidePanel.style.transform = "translateX(-100%)";
}
hamburgerBtn.onclick = openSidePanel;
crossBtn.onclick = closeSidePanel;

// Amount of item selected section

const increaseBtn = document.getElementById("plus");
const decreaseBtn = document.getElementById("minus");
let amountOfItems = document.getElementById("amount");
let itemPrice = 125;
let previewCartTotal = document.getElementById("total_preview");

let totalItems = document.getElementById("total_items");
let totalCharged = document.getElementById("total_charged");
let total = 0;


// Adding an item

function increaseItem() {

    if (total < 1) {
        total = 0;
    }
    amountOfItems.innerHTML = ++total;

    if (total < 1) {
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "inline";
        previewCartTotal.innerHTML = total;
        totalItems.innerHTML = " x " + total;
        totalCharged.innerHTML = "$ " + total * itemPrice;
    }

    if (total < 1) {
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "inline";
        previewCartTotal.innerHTML = total;
        totalItems.innerHTML = " x " + total;
        totalCharged.innerHTML = "$ " + total * itemPrice;
    }
}

// Removing an item

function decreaseItem() {
    if (total < 1) {
        total = 0;
    } else {
        amountOfItems.innerHTML = --total;
        totalItems.innerHTML = " x " + total;
        totalCharged.innerHTML = "$ " + total * itemPrice;
    }

    if (total <= -1) {
        total = 1;
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "inline";
        previewCartTotal.innerHTML = total;
        totalItems.innerHTML = " x " + total;
        totalCharged.innerHTML = "$ " + total * itemPrice;
    }

    if (total > 0) {
        previewCartTotal.style.display = "inline";
    } else {
        previewCartTotal.style.display = "none";
    }
}

amountOfItems.innerHTML = 0;
totalItems.innerHTML = " x " + total;

document.getElementById("delete_button").addEventListener("click", function () {
    total = 0;
    amountOfItems.innerHTML = 0;
    previewCartTotal.innerHTML = total;
    previewCartTotal.style.display = "none";
    totalItems.innerHTML = " x " + total;
    totalCharged.innerHTML = "$ " + total * itemPrice;
})

increaseBtn.onclick = increaseItem;
decreaseBtn.onclick = decreaseItem;

// Cart panel

document.getElementById('cart_button').addEventListener("click", function () {
    menu = document.getElementById("cart_content");
    if (menu.style.display == "block") {
        document.getElementById("cart_content").style.display = "none";
    } else {
        document.getElementById("cart_content").style.display = "block";
    }
}, false);
