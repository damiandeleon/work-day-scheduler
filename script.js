var createDiv = $("<div>");
var timeBlock = $(".time-block");
var description = $(".description");
var row = $(".row");
var hour = $(".hour")

//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container

//use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)
var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (let i = 0; i < workHoursArr.length; i++){
    var createDiv = $("<tr>");
    let newRow = $(".container").append(createDiv);
    $(newRow[i]).addClass("time-block");
    $("tr").text(workHoursArr[i]);
    
}
