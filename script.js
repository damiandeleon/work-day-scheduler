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
            styleElement(timeEl)
            var inputEl = $("<input type = 'text' name= 'details' >");
            inputEl.attr('id', i + 9);
            //create the save Btn div
            var saveBtnEl = $("<button class='saveBtn col-1 fa fa-save'></button>");
            //append each item to the row 
            rowEl.append(timeEl);
            rowEl.append(textareaEl);
            textareaEl.append(inputEl);
            rowEl.append(saveBtnEl);
            $(".container").append(rowEl);

        }
        renderDetails();
    }






    //build in local storage save feature inside the saveBtn div

    function renderDetails() {
        var eventDetails = localStorage.getItem("id");

        if (!eventDetails) {
            return;
        }
        textDescription.textContent = eventDetails;
    }

    $('.saveBtn').on("click", function (event) {
        event.preventDefault();

        localStorage.setItem($(this).prev().children().attr('id'), $(this).prev().val());
        // var details = document.querySelector("#details").value;

        //     localStorage.setItem("details", details);
        //     renderDetials();
    });
});
    //create a onclick event using jQuery to issue a function to save the information in the text area


