function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormat = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    timeFormat = "PM";
  }

  var da = date.getDay();

    if(da===1){
        da="Monday";
    }

    else if(da===2){
        da="Tuesday";
    }

    else if(da===3){
        da="Wednesday";
    }
   else if(da===4){
        da="Thursday";
    }
    else if(da===5){
        da="Friday";
    }

   else  if(da===6){
        da="Saturday";
    }

   else {
       da="Sunday";
   }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;


document.querySelector(".day_of_week").innerText = da;
  document.querySelector(".h_time").innerText = hours;
  document.querySelector(".m_time").innerText = minutes;
  document.querySelector(".s_time").innerText = seconds;
  document.querySelector(".zone").innerText = timeFormat;

  setInterval(() => {
    digitalClock();
  }, 1000);
}

digitalClock();
