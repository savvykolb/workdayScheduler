// Set up all variables to link to HTML attributes 
var currentTimeEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeEl.text(rightNow);
  }


  setInterval(displayTime, 1000);