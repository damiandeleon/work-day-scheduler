$(document).ready(function () {


    //establish some useful global variables

    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var date = current.getDate();
    //find code to tell the time right now 
    var hour = current.getHours();
    var timeTag = $("time");
    var saveBtn = $("button");
    textDescription = $(".description");


    //set code for the current day using moment
    var rightNow = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(rightNow);

    //create timeblocks inside the div container


    var workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


    $(".container").attr("style", "time-block");
    timeValCount = 8;
    //create blocks of time slots 
    for (var i = 0; i < workHoursArr.length; i++) {
        //create the row and time-block div
        var rowEl = $("<div class='row'></div>");
        //create the time div
        var timeEl = $("<time class='hour col-1 hourOfDay'></time>").append(workHoursArr[i]);
        // create the textarea div
        var textareaEl = $("<textarea class='description col-10'></textarea>");
        var inputEl = $("<input type = 'text' name= 'details' id= 'details'/>");
        //create the save Btn div
        var saveBtnEl = $("<button class='saveBtn col-1 fa fa-save'></button>");
        //append each item to the row 
        rowEl.append(timeEl);
        rowEl.append(textareaEl);
        textareaEl.append(inputEl);
        rowEl.append(saveBtnEl);
        $(".container").append(rowEl);

    }
    var timeValCount = 9;
    //loop through the militaryTime array and assign each indix as a value to the timeEl tags
    $('.hourOfDay').each(function () {
        $(".hourOfDay").attr("value", timeValCount);
        timeValCount = timeValCount + 1;
        for (let i = 0; i < 9; i++) {
            console.log($(".hourOfDay").val());
            if ($(this).val() < hour) {
                $(textareaEl).attr("class", "description col-10 past");
            } else if (
                $(this).val() > hour) {
                $(textareaEl).attr("class", "description col-10 future");
            }
            else if (
                $(this).val() == hour) {
                $(textareaEl).attr("class", "description col-10 present");
            }
        }
    });

    //use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)


    // console.log($(".hourOfDay"));
    // //loop throuch each timeEl div and access it's value
    // function chronoShader (){

    // }
    // chronoShader();
    // $("time").each(function () {


    // });

    //     if ($(time).value < hour){
    //     $(textareaEl).attr("class", "description col-10 future");
    // } else if 
    // (.value == hour){
    //     $(textareaEl).attr("class", "description col-10 present");
    // } else {
    //     $(textareaEl).attr("class", "description col-10 past");
    // }





    //build in local storage save feature inside the saveBtn div

    function renderDetails() {
        var eventDetails = localStorage.getItem("details");

        if (!eventDetails) {
            return;
        }
        textDescription.textContent = eventDetails;
    }

    $(saveBtn).on("click", function (event) {
        event.preventDefault();

        var details = document.querySelector("#details").value;

            localStorage.setItem("details", details);
            renderDetials();
    });
});
    //create a onclick event using jQuery to issue a function to save the information in the text area


