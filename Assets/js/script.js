var date = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

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

getTask()

$('.saveBtn').on('click', function(event) {
    event.preventDefault()
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    
    localStorage.setItem(id, task)
    getTask()
})

function getTask() {
    for(var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $("#" + i).text(currentTask)
    }
}