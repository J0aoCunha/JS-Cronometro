const minuteEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliSeconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const resetBtn = document.getElementById('resetBtn');

let interval;
let minute = 0;
let seconds = 0;
let Ispaused = false;
let milliseconds = 0;

startBtn.addEventListener('click', starTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

function starTimer() {
    interval = setInterval(() => {

        if (!Ispaused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minute++;
                }
            }

            millisecondsEl.textContent = formatMilliSeconds(milliseconds);
            secondsEl.textContent = formatTime(seconds);
            minuteEl.textContent = formatTime(minute);
        }

    }, 10);

    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';

}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliSeconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}



function pauseTimer() {
    Ispaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}


function resumeTimer() {
    Ispaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function resetTimer() {
    clearInterval(interval);
    minute = 0;
    seconds = 0;
    milliseconds = 0;

    minuteEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '000';

    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    startBtn.style.display = 'block';

    Ispaused = false;
}
