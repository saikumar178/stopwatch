let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.querySelector(".timer-display");
let interval = null;

function startTimer() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) { milliseconds = 0; seconds++; }
        if (seconds === 60) { seconds = 0; minutes++; }
        if (minutes === 60) { minutes = 0; hours++; }

        display.innerText = 
            `${String(hours).padStart(2, "0")} : ` +
            `${String(minutes).padStart(2, "0")} : ` +
            `${String(seconds).padStart(2, "0")} : ` +
            `${String(milliseconds).padStart(3, "0")}`;
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerText = "00 : 00 : 00 : 000";
}
