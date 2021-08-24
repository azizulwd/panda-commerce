let allH5 = document.querySelectorAll("h5");
for(let allh2Element of allH5){
    allh2Element.style.color = "lightblue";
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