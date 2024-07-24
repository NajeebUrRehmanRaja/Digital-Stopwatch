let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;
let istrue = true;

function Reload() {
  location.reload(); 
}
function Start() {
  timer = true;
  if (istrue) {
    myFunc();
  }
  istrue = false;
}
function Stop() {
  timer = false;
  istrue = true;
  myFunc();
}
function Reset() {
  location.reload();
}

function myFunc() {
  if (timer == true) {
    milli++;
    if (milli == 100) {
      sec++;
      milli = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
    }
    let getSec= sec;
    let getMin= min;
    let getHr= hr;

    if (sec < 10) {
        getSec= "0" + sec;
    }
    if (min < 10) {
        getMin= "0" + min;
    }
    if (hr < 10) {
        getHr= "0" + hr;
    }
    setTimeout("myFunc()", 10);
    document.getElementById("milli").innerHTML =
    milli < 10 ? `0${milli}` : milli;
    document.getElementById("sec").innerHTML = sec < 10 ? `0${sec}` : sec;
    document.getElementById("min").innerHTML = min < 10 ? `0${min}` : min;
    document.getElementById("hr").innerHTML = hr < 10 ? `0${hr}` : hr;
  }
}