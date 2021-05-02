var saveBtn = $('.row').children('.saveBtn'); 

$(document).ready(function () {
    //A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ). ready() will only run once the page Document Object Model (DOM) is ready 
    
    function updateTime(){ //this displays time and updates it every minute
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    }
    updateTime();
    setInterval(function(){
        updateTime();
        console.log('updateTime:', updateTime)
     },60000);
    
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

    function backgroundColor() {
        var hourNow = moment().format('H'); //from moment.js getting current hour
        console.log('hourNow:', hourNow)

        //loop over timeblocks to change background color based on past, present, future
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]); //parseInt returns an integer
            console.log(blockTime)
            //if the block time is less than current hour then add past css element
            if (blockTime < hourNow) {
                $(this).addClass("past");
            }
            //if block time is equal to current hour then add present css element
            else if (blockTime > hourNow) {
                $(this).addClass("future");
            }
            //if nothing else, add future css element
            else {
                $(this).addClass("present");
            }
        })
    }
    backgroundColor(); //reruns function
    
    $("#clearDay").click(function(){
        $(this).data('clicked', true);
        console.log('this:', this)
        if ($(this).data('clicked')) {
            localStorage.clear();
            location.reload();
        }
        
    });
    
})



