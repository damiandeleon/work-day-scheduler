

//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container

//use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)
var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


var row = $("<div class='row'></div>");
var time = $("<div class='hour col-1'>I am time</div>");
var textarea = $("<textarea class='description col-10'></textarea>");
var saveBtn = $("<button class='saveBtn col-1'>Save</button>");
row.append(time);
row.append(textarea);
row.append(saveBtn);
$(".container").append(row);
