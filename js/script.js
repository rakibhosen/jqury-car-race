// script.js

$(function() {
     

    
    /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Brad")').css('border','solid 1px red');
    
    /* --------------------
       jQUERY EVENT METHODS
       -------------------- */
    $('#go').click(function(){

//   build check if complete
  function checkComplete(){
      if(isComplete == false){
          isComplete = true;
      }else{
          place='second';
      }
  }

//   get the width of the cars

var carWidth = $('#car1').width();

// get the raceTrack
var  raceTrackWidth = $(window).width()-carWidth;

// generate a random  value of car

var raceTime1 = Math.floor( (Math.random()*5000)+1);
var raceTime2 = Math.floor( (Math.random()*5000)+1);

var isComplete=false;
var  place='first';

// animate cars
$('#car1').animate({
    left:raceTrackWidth,
}, raceTime1, function(){
    // animate complete
    checkComplete();
    // give some text
    $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
});

// car 2 animate
$('#car2').animate({
    left:raceTrackWidth,
}, raceTime2, function(){
    // animate complete
    checkComplete();
    // give some text
    $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
});

    // reset the race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    



    

    });



    
    
    
    
    
    
    
    
    
    
   
    
});
    








