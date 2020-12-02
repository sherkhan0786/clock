var secondHand = document.querySelector('.seconds-container');
var minuteHand = document.querySelector('.minutes-container');
var hourdHand = document.querySelector('.hours-container');

setInterval(() => {
    var date = new Date();
    var sTime = date.getSeconds();
    var mTime = date.getMinutes();
    var hTime = date.getHours();
    
    var sRotation = 6 * sTime;
    var mRotation = 6 * mTime;
    var hRotation = (30 * hTime) + mTime/2;
    
    secondHand.style.transform = `rotate(${sRotation}deg)`;
    minuteHand.style.transform = `rotate(${mRotation}deg)`;
    hourdHand.style.transform = `rotate(${hRotation}deg)`;

}, 1000);

console.log(`string text line 1` +
`string text line 2`);