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
let previewCartTotal = document.getElementById("total_preview");

amountOfItems.innerHTML = 0;
let total = 0;

// Adding an item

function increaseItem() {
    amountOfItems.innerHTML = ++total;

    if (total < 1) {
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "block";
        previewCartTotal.innerHTML = total;
    }

    if (total < 1) {
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "block";
        previewCartTotal.innerHTML = total;
    }
}

// Removing an item

if (total < 1) {
    previewCartTotal.style.display = "none";
}

function decreaseItem() {
    if (total <= 0) {
        total = 0;
    }
    amountOfItems.innerHTML = --total;

    if (total < 1) {
        previewCartTotal.style.display = "none";
    } else {
        previewCartTotal.style.display = "block";
        previewCartTotal.innerHTML = total;
    }
}


increaseBtn.onclick = increaseItem;
decreaseBtn.onclick = decreaseItem;