// function handleClick() {
//     document.getElementById("title").innerText = "Button Clicked";
//     console.log("Button was clicked!");
// }

// document.getElementById("bookButton").addEventListener("click", handleClick);

// const heading = document.getElementById("mainHeading").innerText;
// console.log(heading);

// const heading2 = document.getElementById("mainHeading").innerText;
// console.log(heading2);

// const heading = document.getElementsByClassName("hero-content")[0].innerText;
// console.log(heading);

// const heading = document.getElementById("mainHeading");
// heading.innerText = "Hello JavaScript!";
// console.log(heading);

// const button = document.getElementById("btn");
// const info = document.getElementById("message");

// button.addEventListener("click", function(){
//     info.innerText = "Button was clicked!";
// });

// const nameInput = document.getElementById("nameInput");
// output = document.getElementById("output");

// nameInput.addEventListener("input", function() {
//     output.innerText = "Hello, " + nameInput.value + "!";
// });

const batteryPercent = document.getElementById("batteryPercent");
const rangeOutput = document.getElementById("estimatedRange");
const button = document.getElementById("calculateBtn");

function getEstimatedRange(batteryPercent) {
    if (batteryPercent < 20) {
        return 0;
    }
    if (batteryPercent > 100) {
        return 400;
    }
    return batteryPercent * 4;
}

calculateBtn.addEventListener("click", function() {
    const batteryValue = batteryPercent.value;
    if (batteryValue === "") {
        estimatedRange.textContent = "Please enter a battery percentage value";
        return;
    }
    const range = getEstimatedRange(batteryValue);
    estimatedRange.textContent = "Estimated Range: " + range + " km";
});