$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    $(".savebtn").on("click", function () {
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        console.log(this);
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        //set items in local storage.
        localStorage.setItem(time, text);
    })

})

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
//     $(".saveBtn").on("click", function(){
//       userInput = $(this).siblings(".form-control").val().trim();
//       console.log(userInput);
//       hourSpan = $(this).siblings(".input-group-prepend").text().trim();
//       console.log(hourSpan);
//       localStorage.setItem(hourSpan, JSON.stringify(userInput));
  
//     })
//     // Button for clear the day
//     $("#clearDay").on("click", function(){
//       localStorage.clear();
//       initPage()
//     }) 
  
//   });