// Time function (ref: moment.js)
var current = moment().format('MMMM Do YYYY');
$("#currentDay").html(current);

// Save User's Text Input Function Button
    // Create local storage to save input
$(document).ready(function () {

$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

localStorage.setItem(time, textInput);

});
    
// Live Event Time Tracker Function
function currentTimeTracker() {
    var currentTime = moment().hour();

// Timeblock color function
// Function to run each of the timeblock
    // Create conditions
    
$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("time")[1]);

    if (timeBlock < currentTime) {
        $(this).addClass("past");
      } 
      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

    }
})
};

// Save into local storage from each timeblock
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time1 .description").val(localStorage.getItem("time1"));
    $("#time2 .description").val(localStorage.getItem("time2"));
    $("#time3 .description").val(localStorage.getItem("time3"));
    $("#time4 .description").val(localStorage.getItem("time4"));
    $("#time5 .description").val(localStorage.getItem("time5"));

// End
    currentTimeTracker();
});