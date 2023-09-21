#!/usr/bin/env node
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log('The date is: ', date, " and the time is: ", time);
