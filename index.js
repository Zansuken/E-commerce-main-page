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

amountOfItems.innerHTML = 0;
let total = 0;

// Adding an item

function increaseItem() {
    amountOfItems.innerHTML = ++total;
}

// Removing an item

function decreaseItem() {
    amountOfItems.innerHTML = total--;
    if (total <= 0) {
        total = 0;
    }
}


increaseBtn.onclick = increaseItem;
decreaseBtn.onclick = decreaseItem;