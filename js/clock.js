//
//function DigitalClock(){
  //  let date=new Date();
    //let hour =date.getHours();
    //let minutes = date.getMinutes();
    //let seconds = date.getSeconds();
    //let Amorpm = date.get
    //document.getElementById(
     //   "clock"

    //).innerHTML = `<h1>${hour}:${minutes}:${seconds}</h1>`;
//}
//DigitalClock();
//setInterval(DigitalClock ,1000);
// 





//DIGITAL CLOCK
//let second = document.querySelector("#second");
//let minute = document.querySelector("#minute");
//let hour = document.querySelector("#hour");
//let digitalclock = document.querySelector("#digitalclock");
//function setclock(){
 // let date = new Date();
  //let hh =date.getHours();
  //let mm = date.getMinutes();
  //let ss = date.getSeconds();
  //let hourDeg =hh *30 + mm *0.5;
 // let minuteDeg =mm *6 +ss *0.1;
 // let secondDeg = ss*6;
  //hour.style.transform = ` rotateZ(${hourDeg}deg)`;
 // minute.style.transform = ` rotateZ(${minuteDeg}deg)`;
  //second.style.transform = ` rotateZ(${secondDeg}deg)`;
  //digitalclock.innerHTML=`${hh %12}:${mm}:${hh>12?"PM" :"AM"}`;


//}
//setInterval(setclock,1000);

//setclock();






//COUNT DOWN CLOCK
let countDate = new Date("jan1, 2022, 00:00:00").getTime();
function newYear(){
  let now = new Date().getTime();
  let gap = countDate - now;

  let second=1000;
  let minute = second*60;
  let hour = minute *60;
  let day = hour *24;


  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour)/ minute);
    let s = Math.floor((gap % minute) / second);
  document.getElementById(
    "days"
  ).innerHTML = `<div><p>${d}</p><p>days</p></div>`;
     document.getElementById(
       "hours"
     ).innerHTML = `<div><p>${h}</p><p>hours</p></div>`;
     document.getElementById(
       "minutes"
     ).innerHTML = `<div><p>${m}</p><p>minutes</p></div>`;
     document.getElementById(
       "seconds"
     ).innerHTML = `<div><p>${s}</p><p>seconds</p></div>`;
}
setInterval(()=>{
  newYear();
},1000);