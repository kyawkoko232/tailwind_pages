const seconds= document.querySelector(".seconds .number");
let minutes= document.querySelector(".minutes .number");
let hours= document.querySelector(".hours .number");
let days= document.querySelector(".days .number");
// console.log(seconds,minutes,hours,days);

let secValue = 60;
let minValue = 1;
let hourValue = 3;
let dayValue = 24;

    const timeFunction = setInterval(() => {
        secValue--;

        if(secValue === 0){
            minValue--;
            secValue=60;
        }

        if(minValue == 0){
            hourValue--;
            minValue=60
        }

        if(hourValue === 0){
            dayValue--;
            hourValue = 24;
        }

        if(dayValue === 0){
            clearInterval(timeFunction)
        }
        // console.log(secValue);
        seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
        minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
        hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
        days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

        
    }, 1000); //1000ms = 1s
