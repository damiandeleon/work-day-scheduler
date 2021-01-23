

//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container

//use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)
var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


$(".container").append("<div class='row'></div>");
// $(".row").appendTotext("I am a time block");
$(".row").append("<div class='hour'><I the hour block/div>");
$(".row").append("<textarea class='description'> I am the text area </textarea>");
$(".row").append("<div class='saveBtn'> I am the save button </div>");

// for (let i = 0; i < workHoursArr.length; i++){
//     // create the rows in table format
//     var createDiv = $("<textarea>").prepend(workHoursArr[i]);
//     //append the rows to the parent container
//     let newRow = $(".container").append(createDiv);
//     //give each row a time-block class for formatting purposes
//     $(newRow[i]).addClass("time-block");
      
// }
