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
let total = 0;
amountOfItems = parseInt(amountOfItems.textContent)

function increaseItem() {
    console.log("Adding an item");
    amountOfItems.innerHTML = total++;
    console.log(total);
}

function decreaseItem() {
    console.log("Removing an item");
    amountOfItems.innerHTML = total--;
    console.log(total);
    if (total < 1) {
        total = total + 1;
    }
}


increaseBtn.onclick = increaseItem;
decreaseBtn.onclick = decreaseItem;