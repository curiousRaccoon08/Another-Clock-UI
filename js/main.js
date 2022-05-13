const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

function starttime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    // var s = date.getSeconds(); 
    var session = "AM";

    if(h == 0) {
        h = 12;
    }

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " + session;
    
    document.getElementById('digital').innerText = time;

    document.getElementById('digital').innerContent = time;

    setTimeout(starttime, 1000);
}

starttime();


