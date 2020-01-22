"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Jimmy Torres 
   Date: 1/21/20  

   Filename:   ph_clock.js     

*/

//this variable will track the  number of minutes left to submit the ticket order
var minsLeft = 30;

//this variable will track the number of seconds left within eachn minute to order
var secsLeft = 0;

//clockId runs clock & var timeLeft sets value
var clockId = setInterval("countDown()", 1000);
var timeLeft = (minsLeft * 60) + secsLeft;

//updates the minsLeft , secsLeft and timeLeft variables every second
function countDown(){
   minsLeft = Math.floor(timeLeft / 60);
   secsLeft = timeLeft - (60* minsLeft);
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").textContent = minsString;
   document.getElementById("seconds").textContent = secsString;
   checkTimer();
   timeLeft -- ; 
}


//stops the clock once the time to submit runs out
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend","<br />(Order Expired)");
   clearInterval(clockId);
}




/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
