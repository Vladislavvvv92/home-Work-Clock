let inputHours = document.getElementById("hours");
let inputMinutes = document.getElementById("minutes");
let inputSeconds = document.getElementById("seconds");

    function clock(){

        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        inputHours.innerHTML = String(hours);
        inputMinutes.innerHTML = String(minutes);
        inputSeconds.innerHTML = String(seconds);

        if(seconds < 10){inputSeconds.innerHTML = "0" + seconds;}
        if(minutes < 10){inputSeconds.innerHTML = "0" + seconds;}
        if(hours < 10){inputSeconds.innerHTML = "0" + seconds;}
    }

setInterval(() => clock(), 1000);


