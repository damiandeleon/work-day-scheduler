

//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container

//use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)
var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


$(".container").attr("style", "time-block");
//create blocks of time slots 
for(var i = 0; i < workHoursArr.length; i++){
    //create the row and time-block div
    var row = $("<div class='row'></div>");
    //create the time div
    var time = $("<div class='hour col-1'></div>").append(workHoursArr[i]);
     // create the textarea div
    var textarea = $("<textarea class='description col-10'></textarea>");
    //create the save Btn div
    var saveBtn = $("<button class='saveBtn col-1'>Save</button>");
    //append each item to the row 
    row.append(time);
    row.append(textarea);
    row.append(saveBtn);
    $(".container").append(row);
}