var saveBtn = $('.row').children('.saveBtn'); 

$(document).ready(function () {
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    
    saveBtn.on("click", function () {
        // console.log('It Clicked!')
        var text = $(this).siblings(".description").val().trim(); // savebtn > textarea > class=description > val collect the user input
        console.log('text:', text)
        var time = $(this).parent().attr("id"); // savebtn > div row > attr is id=hour**
        // $(this) is better to use because it does not run DOM query - refers back to original element
        // console.log('time:', time)
        
        localStorage.setItem(time, JSON.stringify(text)); // save time and text to local storage
    })
  
    // get the item from hour id and then description
    $("#hour9 .description").val(JSON.parse(localStorage.getItem("hour9")));
    $("#hour10 .description").val(JSON.parse(localStorage.getItem("hour10")));
    $("#hour11 .description").val(JSON.parse(localStorage.getItem("hour11")));
    $("#hour12 .description").val(JSON.parse(localStorage.getItem("hour12")));
    $("#hour13 .description").val(JSON.parse(localStorage.getItem("hour13")));
    $("#hour14 .description").val(JSON.parse(localStorage.getItem("hour14")));
    $("#hour15 .description").val(JSON.parse(localStorage.getItem("hour15")));
    $("#hour16 .description").val(JSON.parse(localStorage.getItem("hour16")));
    $("#hour17 .description").val(JSON.parse(localStorage.getItem("hour17")));
    // console.log('localStorage.getItem("hour17":', localStorage.getItem("hour17"))
    
    
})

//     // Button for clear the day
// var clearDay = $(#clearDay);
//     $("#clearDay").on("click", function(){
//       localStorage.clear();
//       initPage()
//     }) 
// var currentTimeEl = $('#currentDay');

// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     currentTimeEl.text(rightNow);
//   }

//   setInterval(displayTime, 1000);

// const hr9 = $("#9").text();
// const hr10 = $("#10").text(); 
// const hr11 = $("#11").text();
// const hr12 = $("#12").text(); 
// const hr1 = $("#1").text();
// const hr2 = $("#2").text(); 
// const hr3 = $("#3").text(); 
// const hr4 = $("#4").text(); 
// const hr5 = $("#5").text();  


// We will need to save text data into local storage using JSON stringify
// example from last week 
// localStorage.setItem("highScores", JSON.stringify(highScores));

// What I found for button / local storage 
//   buttons $(".search-container").click(function() {
//     localStorage.setItem("var", $("DOM Element").val());), 

// function background () {
      
//     $(".form-control").each(function () {
//         var timeTest = parseInt($(this).attr("id"));
//         hour = parseInt(hour);
//         console.log(timeTest);
//         console.log(hour);
//   //      console.log(this);
//         if (hour > timeTest) {
//             $(this).addClass("past");
//         } else if (hour < timeTest) {
//             $(this).addClass("future");
//         } else {
//             $(this).addClass("present");
//         }
//     });
//   }

// $(document).ready(function(){
//     local storage()
//     background()
  
//     // Buttons (save to Local Storage)
  
//   })