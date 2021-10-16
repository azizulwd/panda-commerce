let allH5 = document.querySelectorAll("h5");
for(let allh2Element of allH5){
    allh2Element.style.color = "tomato";
}

let card = document.querySelectorAll(".card");
for(let cards of card){
    cards.style.borderRadius = "30px";
}


// product section function
function productDesign(sectionId){
    let sectionStyle = document.getElementById(sectionId);
    sectionStyle.style.backgroundColor = "tomato";
    sectionStyle.style.padding = "20px";
    sectionStyle.style.borderRadius = "15px";
}

productDesign("backpack");
productDesign("shoes");


// remove button
let removeBtn = document.querySelectorAll(".buy_now_btn");
for(let removeButton of removeBtn){
    removeButton.addEventListener("click", function(){
        removeButton.style.display = "none";
    });
}


// button active or disabled
let emailInput = document.getElementById("email_input");
let submitBtn = document.getElementById("submit_btn");

emailInput.addEventListener("keyup", function(){
    if(emailInput.value == "email"){
        submitBtn.removeAttribute("disabled");
    }
    else{
        submitBtn.setAttribute("submitBtn");
    }
});


// subscribe bg change
let subscribe = document.getElementById("subscribe");
subscribe.addEventListener("dblclick", function(){
    subscribe.style.backgroundColor = "orange";
});





// Changing image
let changeImgOne = document.getElementById("shoe_one");
let changeImgTwo = document.getElementById("shoe_two");
let changeImgThree = document.getElementById("shoe_three");

function changeImages(imageId, imageSrc){
    imageId.addEventListener("mouseenter", function(){
        imageId.src = imageSrc;
    });
}

changeImages(changeImgOne, "images/shoes/shoe-3.png");
changeImages(changeImgTwo, "images/shoes/shoe-1.png");
changeImages(changeImgThree, "images/shoes/shoe-2.png");


// enabled & disabled dark mode full functionality comming soon....
const bgChange = document.getElementById("bg_change");
bgChange.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    bgChange.innerText = "Light Mode";
});