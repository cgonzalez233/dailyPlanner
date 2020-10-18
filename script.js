var now = moment();
var hour = now.hour();
var minute = now.minute();
var dateEl = $("#currentDay");
var hourEl = $("#currentTime")

console.log(minute)
console.log(hour);

dateEl.text(now.format("dddd, MMMM Do"));

var timeblockEl = $("#timeblock");

for (var i = 9; i < 18; i++){
    var rowDiv = $("<div>");
    rowDiv.addClass("row");

    var inputGroupDiv = $("<div>");
    inputGroupDiv.addClass("input-group mb-3");

    var prependDiv = $("<div>");
    prependDiv.addClass("input-group-prepend");

    var span = $("<span>");
    span.addClass("input-group-text");
    var hourText = i;
    if(hourText > 12){
        hourText -= 12;
    }
    span.text(hourText + ":00");

    var inputGroup = $("<input>");
    inputGroup.attr("type", "text");
    inputGroup.addClass("form-control");
    inputGroup.attr("id", i);

    var appendDiv = $("<div>");
    appendDiv.addClass("input-group-append");

    var button = $("<button>");
    button.attr("type", "button");
    button.addClass("btn btn-primary");
    button.text("Save");


    prependDiv.append(span);
    appendDiv.append(button);
    inputGroupDiv.append(prependDiv, inputGroup, appendDiv);
    rowDiv.append(inputGroupDiv);
    timeblockEl.append(rowDiv);

    console.log(i);
    console.log(hour);

    if (i < hour){
        $("#" + i).addClass("past");
    } else if (i === hour){
        $("#" + i).addClass("present");
    } else if (i > hour){
        $("#" + i).addClass("future");
    }
}


currentTime()

function currentTime(){
    if(hour > 12){
        hour -= 12;
        hourEl.text(hour + ":" + minute + "PM") 
    } else {
        hourEl.text(hour + ":" + minute + "AM")
    }
}

getText();

$(".btn").click(function(){
    var btnText = $(this).parent().siblings("input").val();

    localStorage.setItem("textbox_" + $(this).parent().siblings("input").attr("id"), btnText);


    console.log(localStorage);

});


function getText(){
    for (var i = 9; i < 18; i++){
        var textContent = localStorage.getItem("textbox_" + i)
        $("#" + i).val(textContent);
        console.log(textContent);
        console.log($("#" + i));
}}

// localStorage.clear()