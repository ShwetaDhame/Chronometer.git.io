var Hour = document.getElementById("Hour");
var Minute = document.getElementById("Minute");
var Second = document.getElementById("Second");
var DigitalClock = document.getElementById("DigitalClock");

function setClockTime(){
    const day = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes();
    const ss = day.getSeconds();

    const hourDegree = (hh * 30);
    const minuteDegree = (mm * 6);
    const secondDegree = (ss * 6);

    Hour.style.transform = `rotateZ(${hourDegree}deg)`;
    Minute.style.transform = `rotateZ(${minuteDegree}deg)`;
    Second.style.transform = `rotateZ(${secondDegree}deg)`;

    DigitalClock.innerText = `${hh%12<10?'0':''}${hh % 12}:${mm<10?'0':''}${mm}:${ss<10?'0':''}${ss} ${hh>12?'PM':'AM'}`
}
setClockTime();
setInterval(setClockTime,1000);

