$(document).ready( onReady );

function onReady(){
   getTestData();
   $('#addPerson').on('click', addPerson);
} // end onReady

function addPerson() {
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: {// will become req.body
            name : 'Norbu'
        }
    }).then(function(response){
        console.log(response); 
        // DOM does ot reflect array o server, do another GET
        getTestData();       
    }).catch(function(error){
        alert('ERROR IN POST');
    })
}// end addPerson

function getTestData(){
    console.log('in getTest');
    // AJAX GET call to /tester
    $.ajax({
        type: 'GET', // get request.
        url: '/tester'
    }).then( function (response) { // function is called response. name doesn't matter.
        console.log('back from server with:', response );
        // append to DOM...
        appendToDom(response);
    }).catch( function(err) {
        alert( 'problem! check console');
        console.log(err);        
    }) // end ajax
}// end getTestData

function appendToDom(listOfPeople){
    $('#personList').empty();
    for (let person of listOfPeople){
        $('#personList').append(`<li>${person}</li>`)
    }
    // Target UL, add each person to DOM
    }
    
    