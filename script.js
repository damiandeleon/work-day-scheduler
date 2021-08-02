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
    var rightNow = moment().format("dddd, MMMM Do YYYY");

    //append var "rightNow" to the element with the id of "currentDay"
    $("#currentDay").append(rightNow);

    //define work hours array to loop through for row text assignment
    var workHoursArr = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];

    //add the css style class "time-block" to the div element with the class of "container"
    $(".container").attr("style", "time-block");

    //create function that will render the information stored in local storage 
    function renderDetails() {

        //create variables which will assign the 

        var eventDetails1 = localStorage.getItem($("#sb6").prev().attr('id'));

        var eventDetails2 = localStorage.getItem($("#sb7").prev().attr('id'));

        var eventDetails3 = localStorage.getItem($("#sb8").prev().attr('id'));

        var eventDetails4 = localStorage.getItem($("#sb9").prev().attr('id'));

        var eventDetails5 = localStorage.getItem($("#sb10").prev().attr('id'));

        var eventDetails6 = localStorage.getItem($("#sb11").prev().attr('id'));

        var eventDetails7 = localStorage.getItem($("#sb12").prev().attr('id'));

        var eventDetails8 = localStorage.getItem($("#sb13").prev().attr('id'));

        var eventDetails9 = localStorage.getItem($("#sb14").prev().attr('id'));

        var eventDetails10 = localStorage.getItem($("#sb15").prev().attr('id'));

        var eventDetails11 = localStorage.getItem($("#sb16").prev().attr('id'));

        var eventDetails12 = localStorage.getItem($("#sb17").prev().attr('id'));

        var eventDetails13 = localStorage.getItem($("#sb18").prev().attr('id'));

        var eventDetails14 = localStorage.getItem($("#sb19").prev().attr('id'));

        var eventDetails15 = localStorage.getItem($("#sb20").prev().attr('id'));



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


    //create blocks of time slots by calling 

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



        for (var i = 0; i < workHoursArr.length; i++) {
            //create the row and time-block div
            var rowEl = $("<div class='row'></div>");
            //create the time div
            var timeEl = $("<div class='hour col-1' style = 'padding-top: 30px'></div>").append(workHoursArr[i]);
            timeEl.attr("value", i + 6);
            // create the textarea div
            var textareaEl = $("<textarea class='description col-7'></textarea>");
            textareaEl.attr('id', i + 6);
            styleElement(timeEl)
            //create the save Btn div
            var saveBtnEl = $("<button class='saveBtn col-1 far fa-save'></button>");
            var deleteBtnEl = $("<button class ='deleteBtn col-1 far fa-trash-alt'></button>");
            saveBtnEl.attr('id', "sb" + (i + 6));
            //append each item to the row 
            rowEl.append(timeEl);
            rowEl.append(textareaEl);
            rowEl.append(saveBtnEl);
            rowEl.append(deleteBtnEl);
            $(".container").append(rowEl);

        }
        renderDetails();
    }

    renderblocks();




    //build in local storage save feature inside the saveBtn div


    //create a onclick event using jQuery to issue a function to save the information in the text area

    $('.saveBtn').on("click", function (event) {
        event.preventDefault();

        localStorage.setItem($(this).prev().attr('id'), $(this).prev().val());
  
    });

    $('.deleteBtn').on("click", function (event) {
        event.preventDefault();
       localStorage.removeItem($(this).prev().prev().attr('id'));
       location.reload();
    })
});



