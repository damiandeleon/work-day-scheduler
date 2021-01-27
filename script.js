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



    //create blocks of time slots 
    renderblocks();
    function renderblocks() {
        function styleElement(element) {
            //use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)

            if (element.attr('value') < hour) {
                $(textareaEl).attr("class", "description col-10 past");
            } else if (
                element.attr('value') > hour) {
                $(textareaEl).attr("class", "description col-10 future");
            }
            else if (
                element.attr('value') == hour) {
                $(textareaEl).attr("class", "description col-10 present");
            }
        }



        for (var i = 0; i < workHoursArr.length; i++) {
            //create the row and time-block div
            var rowEl = $("<div class='row'></div>");
            //create the time div
            var timeEl = $("<div class='hour col-1 hourOfDay'></div>").append(workHoursArr[i]);
            timeEl.attr("value", i + 9);
            // create the textarea div
            var textareaEl = $("<textarea class='description col-10'></textarea>");
            textareaEl.attr('id', i + 9);
            styleElement(timeEl)
            //create the save Btn div
            var saveBtnEl = $("<button class='saveBtn col-1 fa fa-save'></button>");
            saveBtnEl.attr('id', "sb" + (i + 9));
            //append each item to the row 
            rowEl.append(timeEl);
            rowEl.append(textareaEl);
            rowEl.append(saveBtnEl);
            $(".container").append(rowEl);

        }
        renderDetails();
    }






    //build in local storage save feature inside the saveBtn div

    function renderDetails() {
        var eventDetails1 = localStorage.getItem($("#sb9").prev().attr('id'));

        var eventDetails2 = localStorage.getItem($("#sb10").prev().attr('id'));

        var eventDetails3 = localStorage.getItem($("#sb11").prev().attr('id'));

        var eventDetails4 = localStorage.getItem($("#sb12").prev().attr('id'));

        var eventDetails5 = localStorage.getItem($("#sb13").prev().attr('id'));

        var eventDetails6 = localStorage.getItem($("#sb14").prev().attr('id'));

        var eventDetails7 = localStorage.getItem($("#sb15").prev().attr('id'));

        var eventDetails8 = localStorage.getItem($("#sb16").prev().attr('id'));

        var eventDetails9 = localStorage.getItem($("#sb17").prev().attr('id'));



        $("#9").text(eventDetails1)
        $("#10").text(eventDetails2)
        $("#11").text(eventDetails3)
        $("#12").text(eventDetails4)
        $("#13").text(eventDetails5)
        $("#14").text(eventDetails6)
        $("#15").text(eventDetails7)
        $("#16").text(eventDetails8)
        $("#17").text(eventDetails9)
    }



    $('.saveBtn').on("click", function (event) {
        event.preventDefault();

        localStorage.setItem($(this).prev().attr('id'), $(this).prev().val());
        //     renderDetials();
    });
});
    //create a onclick event using jQuery to issue a function to save the information in the text area


