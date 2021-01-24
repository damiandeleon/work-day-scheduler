

//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container

//use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)
var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


// $(".container").append("<div class='row'></div>");
// var createRow = $("<div class='row'></div>")
// $(".row").append("<div class='hour'><I the hour block/div>");
// $(".row").append("<textarea class='description'> I am the text area </textarea>");
// $(".row").append("<div class='saveBtn'> I am the save button </div>");

// $(".row").appendTo(".container");

// for (let i = 0; i < workHoursArr.length; i++){
//     // create the rows in table format
//     $(".container").append("<div class='row'></div>");
//     // $(".row").append("<div class='hour'><I the hour block/div>");
//     // $(".row").append("<textarea class='description'> I am the text area </textarea>");
//     // $(".row").append("<div class='saveBtn'> I am the save button </div>");   
// }
// for (let i = 0; i < workHoursArr.length; i++){
//     // create the rows in table format
//     // $(".container").append("<div class='row'></div>");
//     $(".row").append("<div class='hour'><I the hour block/div>");
//     // $(".row").append("<textarea class='description'> I am the text area </textarea>");
//     // $(".row").append("<div class='saveBtn'> I am the save button </div>");   
// }

// var row = $("<div class='row'></div>");

// var time = $("<div class='hour'></div>");
// var textarea = $("<textarea class='description'></textarea>");
// var saveBtn = $("<button class='saveBtn'>Save</button>");

// row.append(time);
// row.append(textarea);
// row.append(saveBtn);


var time = $("<div class='hour'>I am time</div>");
var textarea = $("<textarea class='description'></textarea>");
var saveBtn = $("<button class='saveBtn'>Save</button>");
row.append(time);
row.append(textarea);
row.append(saveBtn);
$(".container").append("<div class='row'></div>");