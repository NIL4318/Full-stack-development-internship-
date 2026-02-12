
let button = document.getElementById("check-btn");
let statusText = document.getElementById("status-text");

button.addEventListener("click", async () => {
    button.disabled = true;
    statusText.innerText = "Checking EV Status...";

    try {
        let result = await checkEVStatus();
        statusText.innerText = `EV Status: ${result}`;
    } catch (error) {
        statusText.innerText = error;
    }

    button.disabled = false;

});

function checkEVStatus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = Math.random() > 0.2;
            if (success) {
                let statuses = ["Available", "Charging", "In Use"];
                let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                resolve(randomStatus);
            } else {
                reject("Failed to check EV status. Please try again.");
            }
        }, 3000);
    });
}
