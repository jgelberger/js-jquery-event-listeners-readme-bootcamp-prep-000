//define functions here

$(document).ready(function(){

// call functions here
getIt();
});

function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('form').on('keydown', function(e) {
    if (e.which === 71) {
      alert('You pressed the G key!');
    }
  })
}

function submitIt() {
  $()
}
