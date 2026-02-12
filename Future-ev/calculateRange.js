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