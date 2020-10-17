var now = moment();
var hour = now.hour();
var dateEl = $("#currentDay");

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
    } else (i > hour);{
        $("#" + i).addClass("future");
    }
}

getText();

$(".btn").click(function(){
    var nineText = $("#9").val();

    localStorage.setItem("textbox", nineText);


    console.log(localStorage);

});


function getText(){
    var textContent = localStorage.getItem("textbox")
    $("#9").text(textContent);
    console.log(textContent);
    console.log($("#9"));
}

// localStorage.clear()