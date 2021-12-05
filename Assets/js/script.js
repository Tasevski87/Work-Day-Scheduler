//Imoment.js to pull the curent time, day and year
var date = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

/*created a function to set color who is going to represent
past time(gray) curent time (red) and future(green)
*/
setColor()

function setColor() {
    timeBlock.each(function() {
        var timeBlockHour = $(this).attr('id')

        if (timeBlockHour < currentHour) {
            $(this).addClass('past')
        } else if (timeBlockHour == currentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}
// function that alows entering and saving text in local storage
getTask()

$('.saveBtn').on('click', function(event) {
    event.preventDefault()
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    
    localStorage.setItem(id, task)
    getTask()
})
//functions that pull saved info from local storage
function getTask() {
    for(var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $("#" + i).text(currentTask)
    }
}