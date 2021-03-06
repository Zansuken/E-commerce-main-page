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

}

// Removing an item

function decreaseItem() {
    if (total < 1) {
        total = 0;
    } else {
        amountOfItems.innerHTML = --total;
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
    document.getElementById("empty_cart_msg").style.display = "flex";
    document.getElementById("cart_items").style.display = "none";
    document.getElementById("checkout").style.display = "none";
    actualTotal = 0;
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

    if (actualTotal == 0) {
        document.getElementById("empty_cart_msg").style.display = "flex";
        document.getElementById("cart_items").style.display = "none";
        document.getElementById("checkout").style.display = "none";
    } else {
        document.getElementById("empty_cart_msg").style.display = "none";
        document.getElementById("cart_items").style.display = "flex";
        document.getElementById("cart_thumbnail").style.display = "flex";
        document.getElementById("checkout").style.display = "flex";
    }
}, false);

// Adding items to cart

let actualTotal = 0;
actualTotal = actualTotal + (1 * total);

document.getElementById("add_to_cart").addEventListener("click", function () {
    actualTotal = actualTotal + (1 * total);
    totalItems.innerHTML = " x " + actualTotal;
    totalCharged.innerHTML = "$ " + actualTotal * itemPrice;
    previewCartTotal.style.display = "inline";
    previewCartTotal.innerHTML = actualTotal;
    amountOfItems.innerHTML = 0;
    total = 0;

    if (actualTotal > 0) {
        document.getElementById("empty_cart_msg").style.display = "none";
        document.getElementById("cart_items").style.display = "flex";
        document.getElementById("cart_thumbnail").style.display = "flex";
        document.getElementById("checkout").style.display = "flex";
    }


});

// Mobile Carousel

const carouselImages = document.getElementsByClassName("carousel__img");
const totalImages = carouselImages.length;
let imagePosition = 0;

document.getElementById("next_button").addEventListener("click", function moveToNextImage() {

    for (let image of carouselImages) {
        image.classList.remove("carousel__img--visible");
        image.classList.add("carousel__img--hidden");
    }
    if (imagePosition == totalImages - 1) {
        imagePosition = 0;
    } else {
        imagePosition++;
    }

    carouselImages[imagePosition].classList.add("carousel__img--visible");
})

document.getElementById("back_button").addEventListener("click", function moveToPrevImage() {
    for (let image of carouselImages) {
        image.classList.remove("carousel__img--visible");
        image.classList.add("carousel__img--hidden");
    }
    if (imagePosition == 0) {
        imagePosition = totalImages - 1;
    } else {
        imagePosition--;
    }
    carouselImages[imagePosition].classList.add("carousel__img--visible");
})

// Desktop Carousel

const thumbnails = document.getElementsByClassName("thumbnails");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const actualPreview = document.getElementById("actual_preview")
const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const thumb4 = document.getElementById("thumb4");

thumb1.addEventListener("click", function selectFirst() {
    actualPreview.src = "./images/image-product-1.jpg";
    link1.href = "./images/image-product-1.jpg";
})

thumb2.addEventListener("click", function selectSecond() {
    actualPreview.src = "./images/image-product-2.jpg";
    link1.href = "./images/image-product-2.jpg";
})

thumb3.addEventListener("click", function selectThird() {
    actualPreview.src = "./images/image-product-3.jpg";
    link1.href = "./images/image-product-3.jpg";
})

thumb4.addEventListener("click", function selectFourth() {
    actualPreview.src = "./images/image-product-4.jpg";
    link1.href = "./images/image-product-4.jpg";
})