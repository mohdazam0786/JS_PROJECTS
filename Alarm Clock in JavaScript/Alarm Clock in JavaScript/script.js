const currentTime = document.querySelector("h1"),
content = document.querySelector(".Container-content"),
menu = document.querySelectorAll("select"),
setBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio("./files/ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let opt = `<option value="${i}">${i}</option>`;
    menu[0].firstElementChild.insertAdjacentHTML("afterend", opt);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let opt = `<option value="${i}">${i}</option>`;
    menu[1].firstElementChild.insertAdjacentHTML("afterend", opt);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let opt = `<option value="${ampm}">${ampm}</option>`;
    menu[2].firstElementChild.insertAdjacentHTML("afterend", opt);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        Container-content.classList.remove("disable");
        setBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${menu[0].value}:${menu[1].value} ${menu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    Container-content.classList.add("disable");
    setBtn.innerText = "Clear Alarm";
}

setBtn.addEventListener("click", setAlarm);