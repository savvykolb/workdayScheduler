// Set up all variables to link to HTML attributes 
var currentTimeEl = $('#currentDay');
// moment().format("h"); I will need this to set to my hours somehow 

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeEl.text(rightNow);
  }
  
  setInterval(displayTime, 1000);

const hr9 = $("#9").text();
const hr10 = $("#10").text(); 
const hr11 = $("#11").text();
const hr12 = $("#12").text(); 
const hr1 = $("#1").text();
const hr2 = $("#2").text(); 
const hr3 = $("#3").text(); 
const hr4 = $("#4").text(); 
const hr5 = $("#5").text();  


// We will need to save text data into local storage using JSON stringify
// example from last week 
// localStorage.setItem("highScores", JSON.stringify(highScores));

// What I found for button / local storage 
//   buttons $(".search-container").click(function() {
//     localStorage.setItem("var", $("DOM Element").val());), 
