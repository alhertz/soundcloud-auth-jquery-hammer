$(document).ready(function(){
  $( ".logIn" ).click(function() {
    SC.connect(function() {
    	$( ".logged-out").addClass( "hidden");
    	$( ".wrapper").addClass( "loading" );
    	$( ".status" ).removeClass( "hidden");
      SC.get('/me', function(me) { 
      	$( ".status" ).addClass( "hidden" );
        $( ".wrapper" ).addClass( "logged-in" );
        $( ".logged-in").removeClass( "hidden");
      });
    });
  });
});