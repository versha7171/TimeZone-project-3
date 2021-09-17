setInterval(setClock, 1000);
setInterval(setClock1,1000);
setInterval(setClock2,1000);
setInterval(setClock3,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const hourHand1 = document.querySelector('[data-hour-hand1]');
const minuteHand1 = document.querySelector('[data-minute-hand1]');
const secondHand1 = document.querySelector('[data-second-hand1]');
const hourHand2 = document.querySelector('[data-hour-hand2]');
const minuteHand2 = document.querySelector('[data-minute-hand2]');
const secondHand2 = document.querySelector('[data-second-hand2]');
const hourHand3 = document.querySelector('[data-hour-hand3]');
const minuteHand3 = document.querySelector('[data-minute-hand3]');
const secondHand3 = document.querySelector('[data-second-hand3]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

    function setClock1(offset){
    const a=new Date();
     const timezone=a.getTime()+(a.getTimezoneOffset()*60000);
    const b=new Date(timezone+(3600000*-4));
    const secondsRatio = b.getSeconds() / 60;
    const minutesRatio = (secondsRatio + b.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + b.getHours()) / 12;
    setRotation(secondHand1, secondsRatio);
    setRotation(minuteHand1, minutesRatio);
    setRotation(hourHand1, hoursRatio);
    
}
function setClock2(offset){
    const a=new Date();
    const timezone=a.getTime()+(a.getTimezoneOffset()*60000);
   const b=new Date(timezone+(3600000*+8));
   const secondsRatio = b.getSeconds() / 60;
    const minutesRatio = (secondsRatio + b.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + b.getHours()) / 12;
    setRotation(secondHand2, secondsRatio);
    setRotation(minuteHand2, minutesRatio);
    setRotation(hourHand2, hoursRatio);
}
function setClock3(offset){
    const a=new Date();
    const timezone=a.getTime()+(a.getTimezoneOffset()*60000);
   const b=new Date(timezone+(3600000*+10));
   const secondsRatio = b.getSeconds() / 60;
    const minutesRatio = (secondsRatio + b.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + b.getHours()) / 12;
    setRotation(secondHand3, secondsRatio);
    setRotation(minuteHand3, minutesRatio);
    setRotation(hourHand3, hoursRatio);
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
};
setClock()
setClock1()
setClock2()
setClock3()
