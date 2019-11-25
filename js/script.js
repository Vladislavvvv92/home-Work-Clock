let hourForm = document.getElementById('hour')
let minuteForm = document.getElementById('minute')
let secondForm = document.getElementById('second')

function time() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = hour.toString();
    minute = minute.toString();
    second = second.toString();


    if (hour.length === 1) {
        (hour = "0" + hour)
    }
    if (minute.length === 1) {
        (minute = "0" + minute)
    }

    if (second.length === 1) {
        (second = "0" + second)
    }

    hourForm.innerHTML = hour+':';
    minuteForm.innerHTML = minute+':';
    secondForm.innerHTML = second;
    console.log(hour + ":" + minute + ":" + second);

}

setInterval(time, 1000);
