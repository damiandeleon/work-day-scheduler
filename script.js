//establish some useful global variables
var current = new Date();
var year = current.getFullYear();
var month = current.getMonth()+1;
var date = current.getDate();
var hour = current.getHours();
var hoursID = $("#hour");


//set code for the current day using moment
var rightNow = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(rightNow);

//create timeblocks inside the div container


var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


$(".container").attr("style", "time-block");
//create blocks of time slots 
for(var i = 0; i < workHoursArr.length; i++){
    //create the row and time-block div
    var rowEl = $("<div class='row'></div>");
    //create the time div
    var timeEl = $("<div id='hour' class='col-1'></div>").append(workHoursArr[i]);
     // create the textarea div
    var textareaEl = $("<textarea class='description col-10'></textarea>");
    //create the save Btn div
    var saveBtnEl = $("<button class='saveBtn col-1'>Save</button>");
    //append each item to the row 
    rowEl.append(timeEl);
    rowEl.append(textareaEl);
    rowEl.append(saveBtnEl);
    $(".container").append(rowEl);
    
}

//create a military time string
var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//loop through the militaryTime array and assign each indix as a value to the timeEl tags
for(var i = 0; i < hoursID.length; i++){
//add a value to the timeEl, to track time
$("#hour").attr("value", 9);
    
}

//find code to tell the date and time right now 
// console.log(year, month, date, hour);

    //use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)

    //loop throuch each timeEl div and access it's value





//create save button in the saveBtn div

    //build in local storage save feature inside the saveBtn div

    //create a onclick event using jQuery to issue a function to save the information in the text area