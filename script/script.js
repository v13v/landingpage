window.addEventListener('DOMContentLoaded',function(){
  'use strict';
  // Timer
  function countTimer(deadline){
    let
    timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'), 
    timerSeconds = document.querySelector('#timer-seconds');


    function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 60 / 60) );
     return {
        hours,
        minutes,
        seconds,
        timeRemaining
     };
    }
   function appDateClock(){
     let timer = getTimeRemaining();

     function appNull(time){
      if (time > 0 && time < 10) { 
        return '0' + time;
      } else {
        return time;
      }
    }


     timerHours.textContent = appNull(timer.hours);
     timerMinutes.textContent = appNull(timer.minutes);
     timerSeconds.textContent = appNull(timer.seconds);

     if(timer.timeRemaining > 0){
      setInterval(appDateClock, 1000,)
     //setTimeout(appDateClock, 1000);
     }else{
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
     }
   }
     
   appDateClock()
  }
  //setInterval(countTimer, 1000, '4,july , 2020')
  countTimer('02, july, 2020')







})