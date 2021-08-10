$(document).ready(function () {
    //establish gobal Javascript methods of gathering the date
    //create constructor variable called "current" that pulls for the current date from Javascript
    var current = new Date();
    //pull the year and call it "year"
    var year = current.getFullYear();
    //pull the current month and call it "month" (remember that January is represented by 0, so add 1 to the code)
    var month = current.getMonth() + 1;
    // pull the date and call it "date"
    var date = current.getDate();
    //find code to tell the time right now 
    var hour = current.getHours();


    //using Jquery to create Query selectors for saveBtn and deleteBtn
    var saveBtn = $("button");
    var deleteBtn = $("button")
    //set code for the current day using moment
    var rightNow = moment().format("dddd: MMMM Do YYYY");

    //append var "rightNow" to the element with the id of "currentDay"
    $("#currentDay").append(rightNow);

    //define work hours array to loop through for row text assignment
    var workHoursArr = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];

    //add the css style class "time-block" to the div element with the class of "container"
    $(".container").attr("style", "time-block");

    //create function that will render the information stored in local storage 
    function renderDetails() {
        // console.log(localStorage.getItem($('#saveButton6').prev().attr('id')))

        //for each time slot, create a variable called "eventDetails".  Each "eventDetils variable" will equal the contents of the corresponding local storage.  (Note: navigate the dom by finding the local storage contents of the element tag that comes before the element with the id of "saveButton[n]".  From there find the local storage key that matches the number assigned to "id" of that element. So, if you're looking for #id 6, then you pull the value of the local storage with the key of 6).


        var eventDetails1 = localStorage.getItem($("#saveButton6").prev().attr('id'));

        var eventDetails2 = localStorage.getItem($("#saveButton7").prev().attr('id'));

        var eventDetails3 = localStorage.getItem($("#saveButton8").prev().attr('id'));

        var eventDetails4 = localStorage.getItem($("#saveButton9").prev().attr('id'));

        var eventDetails5 = localStorage.getItem($("#saveButton10").prev().attr('id'));

        var eventDetails6 = localStorage.getItem($("#saveButton11").prev().attr('id'));

        var eventDetails7 = localStorage.getItem($("#saveButton12").prev().attr('id'));

        var eventDetails8 = localStorage.getItem($("#saveButton13").prev().attr('id'));

        var eventDetails9 = localStorage.getItem($("#saveButton14").prev().attr('id'));

        var eventDetails10 = localStorage.getItem($("#saveButton15").prev().attr('id'));

        var eventDetails11 = localStorage.getItem($("#saveButton16").prev().attr('id'));

        var eventDetails12 = localStorage.getItem($("#saveButton17").prev().attr('id'));

        var eventDetails13 = localStorage.getItem($("#saveButton18").prev().attr('id'));

        var eventDetails14 = localStorage.getItem($("#saveButton19").prev().attr('id'));

        var eventDetails15 = localStorage.getItem($("#saveButton20").prev().attr('id'));

        //add the text contents of each eventDetail varible into the elements identified with the number corresponding to it's ID.
        $("#6").text(eventDetails1)
        $("#7").text(eventDetails2)
        $("#8").text(eventDetails3)
        $("#9").text(eventDetails4)
        $("#10").text(eventDetails5)
        $("#11").text(eventDetails6)
        $("#12").text(eventDetails7)
        $("#13").text(eventDetails8)
        $("#14").text(eventDetails9)
        $("#15").text(eventDetails10)
        $("#16").text(eventDetails11)
        $("#17").text(eventDetails12)
        $("#18").text(eventDetails13)
        $("#19").text(eventDetails14)
        $("#20").text(eventDetails15)
    }

    //create function rednerblocks to render blocks
    function renderblocks() {
        function styleElement(element) {
            //use if statement to set the timeblocks backgrounds to change depending on the chornological relatinoship each block is to the current time (past, current, future)

            if (element.attr('value') < hour) {
                $(textareaEl).attr("class", "description col-9 past");
            } else if (
                element.attr('value') > hour) {
                $(textareaEl).attr("class", "description col-9 future");
            }
            else if (
                element.attr('value') == hour) {
                $(textareaEl).attr("class", "description col-9 present");
            }
        }
        //create a for loop that cycles through the workHoursArr array so it can populate the contents to each row as they are created
        for (var i = 0; i < workHoursArr.length; i++) {
            //create the row and time-block div
            var rowEl = $("<div class='row'></div>");
            //create the time div element append the contents of the prespective array index from "workHoursArr"
            var timeEl = $("<div class='hour col-1' style = 'padding-top: 30px'></div>").append(workHoursArr[i]);

            //becasue the first hour of the calendar day is 6am, you will take the value and add 6 to it so it renders with the correct value
            timeEl.attr("value", i + 6);
            // create the textarea div
            var textareaEl = $("<textarea class='description col-7'></textarea>");

            //assign an id correlating to the hour of the day represented in that row.
            textareaEl.attr('id', i + 6);

            //call the "styleElement" function to set the background color so that past timeslots appear gray, the current time slot appears red and the future timeslots appear green.
            styleElement(timeEl)

            //create the save Btn div element
            var saveBtnEl = $("<button class='saveBtn col-1 far fa-save'></button>");

            //add an id to the newly created called 'saveButton' and the number corresponding to it's time slot
            saveBtnEl.attr('id', "saveButton" + (i + 6));

            //create a delete Btn div element
            var deleteBtnEl = $("<button class ='deleteBtn col-1 far fa-trash-alt'></button>");

            //append each item to the row 
            rowEl.append(timeEl);
            rowEl.append(textareaEl);
            rowEl.append(saveBtnEl);
            rowEl.append(deleteBtnEl);

            //then append the newly completed rowEL to the div with the class of "container"
            $(".container").append(rowEl);

        }
        //after all of the blocks are created, recall local storage to populate the blocks with any saved details it has.  
        renderDetails();
    }
    //create blocks of time slots by calling 
    renderblocks();


    //create an onclick event using jQuery to call a function to save the information in the text area div

    $('.saveBtn').on("click", function (event) {
        event.preventDefault();

        localStorage.setItem($(this).prev().attr('id'), $(this).prev().val());
  
    });

    //create an onclick event using jQuery to call a function to delete the information in the text area div

    $('.deleteBtn').on("click", function (event) {
        event.preventDefault();
       localStorage.removeItem($(this).prev().prev().attr('id'));
       location.reload();
    })
});



