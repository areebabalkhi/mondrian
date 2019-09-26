// Make big box 
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "bigBug");

// Make columns
document.body.appendChild(mainDiv);
var column1 = document.createElement("div");
column1.setAttribute("id", "columnOne");
mainDiv.appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("id", "columnTwo");
mainDiv.appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("id", "columnThree");
mainDiv.appendChild(column3);
var column4 = document.createElement("div");
column4.setAttribute("id", "columnFour");
mainDiv.appendChild(column4);
var column5 = document.createElement("div");
column5.setAttribute("id", "columnFive");
mainDiv.appendChild(column5);

//Define variables
var boxNum = 20; //number of boxes per column (not all will be shown because reasons)
var divWidths = []; //array to hold widths
var widthAdd = 0; //variable for adding up widths
for (var i = 0; i < boxNum; i++) {
  var divEl = document.createElement("div");
  var height = Math.floor(Math.random() * 101); // randomized height
  var width = 100;
  var heightString = height.toString() + "px";
  var widthString = width.toString() + "px";
  var color = Math.floor(Math.random() * 5); // randomized color
  if (color == 0) {
    divEl.style.backgroundColor = "red";
  } else if (color == 1) {
    divEl.style.backgroundColor = "yellow";
  } else if (color == 2) {
    divEl.style.backgroundColor = "black";
  } else {
    divEl.style.backgroundColor = "white";
  }
  divEl.style.width = widthString;
  divEl.style.height = heightString;
  for (var j = 0; j < divWidths.length; j++) {
    widthAdd += divWidths[j]; // add up widths to put the boxes so that they don't overlap/have gaps
  }
  divEl.style.positon = "relative";
  divEl.style.position.top = widthAdd.toString() + "px";
  column1.appendChild(divEl);
}

// reset variables to zero
divWidths = [];
widthAdd = 0

//column 2
for (var i = 0; i < boxNum; i++) {
  var divEl = document.createElement("div");
  var height = Math.floor(Math.random() * 101);
  var width = 100;
  var heightString = height.toString() + "px";
  var widthString = width.toString() + "px";
  var color = Math.floor(Math.random() * 5);
  if (color == 0) {
    divEl.style.backgroundColor = "red";
  } else if (color == 1) {
    divEl.style.backgroundColor = "yellow";
  } else if (color == 2) {
    divEl.style.backgroundColor = "black";
  } else {
    divEl.style.backgroundColor = "white";
  }
  divEl.style.width = widthString;
  divEl.style.height = heightString;
  for (var j = 0; j < divWidths.length; j++) {
    widthAdd += divWidths[j];
  }
  divEl.style.positon = "relative";
  divEl.style.position.top = widthAdd.toString() + "px";
  column2.appendChild(divEl);
}

// column 3
divWidths = [];
widthAdd = 0;
for (var i = 0; i < boxNum; i++) {
  var divEl = document.createElement("div");
  var height = Math.floor(Math.random() * 101);
  var width = 100;
  var heightString = height.toString() + "px";
  var widthString = width.toString() + "px";
  var color = Math.floor(Math.random() * 5);
  if (color == 0) {
    divEl.style.backgroundColor = "red";
  } else if (color == 1) {
    divEl.style.backgroundColor = "yellow";
  } else if (color == 2) {
    divEl.style.backgroundColor = "black";
  } else {
    divEl.style.backgroundColor = "white";
  }
  divEl.style.width = widthString;
  divEl.style.height = heightString;
  for (var j = 0; j < divWidths.length; j++) {
    widthAdd += divWidths[j];
  }
  divEl.style.positon = "relative";
  divEl.style.position.top = widthAdd.toString() + "px";
  column3.appendChild(divEl);
}

// column 4
divWidths = [];
widthAdd = 0;
for (var i = 0; i < boxNum; i++) {
  var divEl = document.createElement("div");
  var height = Math.floor(Math.random() * 101);
  var width = 100;
  var heightString = height.toString() + "px";
  var widthString = width.toString() + "px";
  var color = Math.floor(Math.random() * 5);
  if (color == 0) {
    divEl.style.backgroundColor = "red";
  } else if (color == 1) {
    divEl.style.backgroundColor = "yellow";
  } else if (color == 2) {
    divEl.style.backgroundColor = "black";
  } else {
    divEl.style.backgroundColor = "white";
  }
  divEl.style.width = widthString;
  divEl.style.height = heightString;
  for (var j = 0; j < divWidths.length; j++) {
    widthAdd += divWidths[j];
  }
  divEl.style.positon = "relative";
  divEl.style.position.top = widthAdd.toString() + "px";
  column4.appendChild(divEl);
}

// column 5
divWidths = [];
widthAdd = 0;
for (var i = 0; i < boxNum; i++) {
  var divEl = document.createElement("div");
  var height = Math.floor(Math.random() * 101);
  var width = 100;
  var heightString = height.toString() + "px";
  var widthString = width.toString() + "px";
  var color = Math.floor(Math.random() * 5);
  if (color == 0) {
    divEl.style.backgroundColor = "red";
  } else if (color == 1) {
    divEl.style.backgroundColor = "yellow";
  } else if (color == 2) {
    divEl.style.backgroundColor = "black";
  } else {
    divEl.style.backgroundColor = "white";
  }
  divEl.style.width = widthString;
  divEl.style.height = heightString;
  for (var j = 0; j < divWidths.length; j++) {
    widthAdd += divWidths[j];
  }
  divEl.style.positon = "relative";
  divEl.style.position.top = widthAdd.toString() + "px";
  column5.appendChild(divEl);
}

// make a div to hide the messy parts
var hidingDiv = document.createElement("div");
hidingDiv.setAttribute("id", "shh");
document.body.appendChild(hidingDiv);