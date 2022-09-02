var currentDate = document.getElementById('currentDay');
var buttonEl = document.getElementsByClassName('buttonCol');
var currentHour = moment().hour();

// display current date
currentDate.textContent = moment().format('dddd, MMMM Do, YYYY');

// save tasks on click of save button
$('.buttonCol').click(function() {
    var task = $(this).siblings('.eventCol').val();
    console.log(task);

    var taskTime = $(this).siblings('.timeCol').attr('id');
    console.log(taskTime);

    localStorage.setItem(taskTime, task);

    window.alert('Event saved');
});

// display saved tasks 
$('#9').siblings('.eventCol').val(localStorage.getItem('9'));
$('#10').siblings('.eventCol').val(localStorage.getItem('10'));
$('#11').siblings('.eventCol').val(localStorage.getItem('11'));
$('#12').siblings('.eventCol').val(localStorage.getItem('12'));
$('#13').siblings('.eventCol').val(localStorage.getItem('13'));
$('#14').siblings('.eventCol').val(localStorage.getItem('14'));
$('#15').siblings('.eventCol').val(localStorage.getItem('15'));
$('#16').siblings('.eventCol').val(localStorage.getItem('16'));
$('#17').siblings('.eventCol').val(localStorage.getItem('17'));

// color code text area based on time
$('.eventCol').each(function() {
    var checkHour = $(this).siblings('.timeCol').attr('id');

    if (checkHour == currentHour) {
        $(this).addClass('present');
    } else if (checkHour < currentHour) {
        $(this).addClass('past');
    } else if (checkHour > currentHour) {
        $(this).addClass('future');
    }
})


