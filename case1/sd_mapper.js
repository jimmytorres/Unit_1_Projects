"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jimmy Torres 
   Date: 1/17/20   

*/

//sets new date and local time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//inserts timeStr into the element with the id "timeStamp"
document.getElementById("timeStamp").innerHTML = timeStr;

//gets hour and month from local time 
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//multiplies month and hour by two
var mapNum = (2 * thisMonth + thisHour) % 24;

//inputs mapNum within the image
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";

//inserts imgStr after the id "planisphere"
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
