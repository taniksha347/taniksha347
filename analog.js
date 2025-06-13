let hr = document.getElementById('hour');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6 * (ss + ms / 1000);

    hr.style.transform =`rotate(${hRotation}deg)`;
    mins.style.transform =`rotate(${mRotation}deg)`;
    secs.style.transform =`rotate(${sRotation}deg)`;

}

setInterval(displayTime,10);

