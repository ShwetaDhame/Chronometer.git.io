
# Chronometer

Chronometer is used measuring time accurately in spite of motion or variations in temperature, humidity, and air pressure.

## Prerequisite
* HTML5 
* CSS3
* JavaScript


## Brief Description
There are three hands of clock which are Hour Hand, Minute Hand and Second Hand created using CSS3 and their rotation and time set by using JavaSript.

## Speciality 
An Analog and Digital chronometer in a single Code.

## Overview
### Before : By using only HTML5 and CSS3
![Capture1](https://user-images.githubusercontent.com/85799689/135759178-f354bc7b-58f5-40b0-a10f-84e1f54e7131.JPG)
### After : JavaScript Magic
![Capture](https://user-images.githubusercontent.com/85799689/135759067-8a39d8bb-5dd4-4409-9da2-4028d5171877.JPG)

## HTML Code
```HTML Code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles.css">
    <title>Clock</title>
</head>
<body>
       <div class="Clock">
           <div id="Hour"></div>
           <div id="Minute"></div>
           <div id="Second"></div>
           <span id="DigitalClock"></span>
       </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS3 Code
```CSS3 Code
*
body,html{
    margin: 0;
    padding: 0;
     background-color: #f9fafa ;
}
 .Clock{
    width: 25rem;
    height: 25rem;
    align-items: center;
    margin: 0, auto;
    margin-top: 6rem;
    margin-left: 33%;
    border-radius: 50%;
    border: 20px solid rgb(17, 7, 7);
    background-image: url(Images/clock.png),url(Images/BG.png);
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
} 
.Clock::after{
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    border: 2px solid white;
}
#Hour,#Minute,#Second{
    position: absolute;
    width:100% ;
    height: 100%;
}
#Hour{
    z-index: 1;
}
#Minute{
    z-index: 2;
}
#Second{
    z-index: 3;
}
#Hour::before,#Minute::before,#Second::before{
    content: "";
    display: block;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-100%);
    border-radius: 10px;
}
#Hour::before{
    width: 6px;
    height: 120px;
    background: brown;
}
#Minute::before{
    width: 4px;
    height: 140px;
    background: lightcoral;
}
#Second::before{
    width: 2px;
    height: 160px;
    background: red;
}
/* #Second::before{
    width: 1px;
    height: 30px;
    background: red;
    transform:translate(-50%,0);
} */
#DigitalClock{
    position: absolute;
    background: #f3f2f2;
    z-index: 1;
    font-family: cursive;
    padding: 0 6px 0 6px;
    font-size: 80%;
    top: 48%;
    left: 75%;
    transform: translate(-50%);
    box-shadow: inset 0px 0px 3px 3px #0000001a;
    border-radius: 4px;
    text-align: center;
}
```
## JavaScript Code
```var Hour = document.getElementById("Hour");
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
```

## Thanking You!!
