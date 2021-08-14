// task 2: h2 lightblue color add.
const h2 = document.getElementsByTagName("h2");

for (const element of h2) {
    element.style.color = "lightblue";
};


// task 3: tomato backcolor backpack id
document.getElementById("backpack").style.backgroundColor = "tomato";


// task 4: add border radius to card class.
const cards = document.getElementsByClassName("card");

for (const card of cards) {
    card.style.borderRadius = "30px";
};


// task 5: write function to add it as event
function clicked() {
    console.log("mama! keo amare click korse");
};


// task 6: add event to all buy-now button. and remove it.
const buyNowButtons = document.getElementsByClassName("delete-after-click");

for (const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener("click", function () {
        buyNowButton.parentNode.parentNode.parentNode.parentNode.removeChild(buyNowButton.parentNode.parentNode.parentNode);
    })
}

// task 7: enable btn
const disabledBtn = document.getElementById("disabled-btn");
const inpEnableBtn = document.getElementById("inp-enable-btn");

disabledBtn.addEventListener("click", function () {
    console.log(inpEnableBtn.value);
    inpEnableBtn.value = "";
})

inpEnableBtn.addEventListener("input", function (event) {
    if (event.target.value == "email") {
        disabledBtn.removeAttribute("disabled");
    } else {
        disabledBtn.setAttribute("disabled", true);
    }
});


// task 8: change photo when mouse enter
const changablePhoto = document.getElementById("change");

changablePhoto.addEventListener("mouseenter", function () {
    changablePhoto.setAttribute("src", "images/bags/bag-3.png");
});

changablePhoto.addEventListener("mouseleave", function () {
    changablePhoto.setAttribute("src", "images/bags/bag-2.png");
});


// task 9: last section dblclick
const subscribeSection = document.getElementById("subscribe");

subscribeSection.addEventListener("dblclick", function () {
    subscribeSection.style.backgroundColor = "orange";
});