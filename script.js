
setInterval(() => {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let ampm = ""
    if (h >= 12) {
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    if (h > 12) {
        h = (h - 12)
    }
    let time = `${h}:${m}:${s} ${ampm}`
    document.getElementById('currentTime').innerHTML = time

}, 1000)


function calculateSeconds() {
    const timeControl = document.querySelector('input[type="time"]');
    let timeString = timeControl.value;
    const timeArr = timeString.split(":");
    let settedHour = parseInt(timeArr[0])
    let settedMin = parseInt(timeArr[1])
    let settedSec = parseInt(timeArr[2])

    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    // console.log((settedHour - h), (settedMin - m), (settedSec - s))
    let seconds = ((settedHour - h) * 60 * 60) + ((settedMin - m) * 60) + (settedSec - s)
    console.log(seconds)
    if (seconds > 0) {
        setAlarm(seconds)
    }
}



function setAlarm(seconds) {
    setTimeout(() => {
        myint = setInterval(() => {
            sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
            sound.play()
        }, 1000)
    }, seconds * 1000)
}

function stopAlarm() {
    clearInterval(myint)
    document.querySelector('input[type="time"]').value = ""
}
