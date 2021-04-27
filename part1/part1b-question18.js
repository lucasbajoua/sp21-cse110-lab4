let d = new Date();
function rightNow(date) {
    console.log(date)
}
let interval = 1000;
let time = setInterval(rightNow, interval, d);