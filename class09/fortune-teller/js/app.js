// 1. Use document.getElementById() and attach an .onclick event handler to #clickme
// 2. Assign this event handler to a function named tellFortune
// 3. The function ellFortune should:
// - A) store the values from the four inputs (#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output
$(document).ready(function(){
var hometown = document.getElementById('hometown');
var partner = document.getElementById('partner');
var favNum = document.getElementById('favNum');
var jobTitle = document.getElementById('jobTitle');
var clickme = document.getElementById('clickme');
var output = document.getElementById('output');


var Myhometown = hometown.value;
var Mypartner = partner.value;
var MyfavNum = favNum.value;
var MyjobTitle = jobTitle.value;






});