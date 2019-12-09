document.addEventListener("DOMContentLoaded", function() {
    setInterval(setClock, 1000);
    const hourbar = document.querySelector(".hour.hand");
    const minutebar = document.querySelector(".minute.hand");
    const secondbar = document.querySelector(".second.hand");

    function setClock() {
        const hey = new Date();
        const secondRatio = hey.getSeconds() / 60; //0-59
        const minuteRatio = (secondRatio + hey.getMinutes()) / 60; //0-59
        const hoursRatio = (minuteRatio + hey.getHours()) / 12; //0-23

        setRotation(hourbar, hoursRatio);
        setRotation(minutebar, minuteRatio);
        setRotation(secondbar, secondRatio);
        console.log("hey");

        function setRotation(element, hsm) {
            element.style.setProperty('--rotate', hsm * 360);


        };





    };
    setClock();
})