let hourForm = document.getElementById('hour');

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

    hourForm.innerHTML = hour + ":" + minute + ":" + second;

    console.log(hour + ":" + minute + ":" + second);

}

setTimeout(function () {
    setInterval(time, 1000)
}, 4000);
