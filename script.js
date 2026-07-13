// =========================
// Counter App
// =========================

let count = 0;

const countValue =
document.getElementById("count");

const increaseBtn =
document.getElementById("increaseBtn");

const decreaseBtn =
document.getElementById("decreaseBtn");

const resetBtn =
document.getElementById("resetBtn");


increaseBtn.addEventListener(
"click",
function(){

    count++;

    countValue.textContent = count;

}
);


decreaseBtn.addEventListener(
"click",
function(){

    count--;

    countValue.textContent = count;

}
);


resetBtn.addEventListener(
"click",
function(){

    count = 0;

    countValue.textContent = count;

}
);




// =========================
// Color Changer
// =========================

const colors = [

"red",

"blue",

"green",

"purple",

"orange",

"pink",

"yellow",

"teal",

"brown",

"black"

];

const colorBox =
document.getElementById("colorBox");

const colorBtn =
document.getElementById("colorBtn");

const colorName =
document.getElementById("colorName");


colorBtn.addEventListener(
"click",
function(){

    const randomIndex =
    Math.floor(
        Math.random() * colors.length
    );

    const selectedColor =
    colors[randomIndex];

    colorBox.style.backgroundColor =
    selectedColor;

    colorName.textContent =
    selectedColor.toUpperCase();

    if(
        selectedColor === "black" ||
        selectedColor === "blue" ||
        selectedColor === "purple" ||
        selectedColor === "brown" ||
        selectedColor === "teal"
    ){

        colorName.style.color = "white";

    }
    else{

        colorName.style.color = "black";

    }

}
);




// =========================
// BMI Calculator
// =========================

const bmiForm =
document.getElementById("bmiForm");

const bmiResult =
document.getElementById("bmiResult");

const bmiStatus =
document.getElementById("bmiStatus");


bmiForm.addEventListener(
"submit",
function(event){

    event.preventDefault();

    const height =
    Number(
        document.getElementById("height").value
    );

    const weight =
    Number(
        document.getElementById("weight").value
    );

    const heightInMeter =
    height / 100;

    const bmi =
    weight / (heightInMeter * heightInMeter);

    bmiResult.textContent =
    "Your BMI: " + bmi.toFixed(2);

    if(bmi < 18.5){

        bmiStatus.textContent =
        "Underweight";

        bmiStatus.style.color =
        "orange";

    }
    else if(bmi < 25){

        bmiStatus.textContent =
        "Normal Weight";

        bmiStatus.style.color =
        "green";

    }
    else if(bmi < 30){

        bmiStatus.textContent =
        "Overweight";

        bmiStatus.style.color =
        "darkorange";

    }
    else{

        bmiStatus.textContent =
        "Obese";

        bmiStatus.style.color =
        "red";

    }

    bmiForm.reset();

});