// // const { Children } = require("react")

// let h = document.querySelector("#vicky")
// // h.style.color = "red"
// // h.style.background = "blue"
// // h.style.fontsize = "90px"
// h.classList.toggle("rupa")
// h.classList.toggle("vicky")
// // h.classList.remove("vicky")
// console.log(h.classList)

function calculateBMI() {

    // Get values from input boxes
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Check if user entered values
    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML =
            "Please enter weight and height.";

        return;
    }

    // Convert height from centimeters to meters
    height = height / 100;

    // BMI formula
    let bmi = weight / (height * height);

    // Round BMI to 2 decimal places
    bmi = bmi.toFixed(2);

    let category;

    // Check BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi + "<br>" +
        "Category: " + category;
}
