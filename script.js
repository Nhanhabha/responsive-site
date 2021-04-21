
$(function() {

update = function() {
	
 	var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
 	console.log(name + " " + email + " " + message);
  
    $.ajax({
        url: "/update",
        type: "POST",
        data: {
            name: name,
            email: email,
            message: message
        },
        cache: false,
        success: function() {
            
            $('#alert').html("<div class='alert alert-success'>");
            $('#alert > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#alert > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#alert > .alert-success')
                .append('</div>');
            $('#contactForm').trigger("reset");
            console.log("Success: message sent.")
        },
        error: function() {
            $('#alert').html("<div class='alert alert-danger'>");
            $('#alert > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#alert > .alert-danger').append("<strong>Sorry " + name + ", were you expecting this to go through? hahhaaah. Please try again later!");
            $('#alert > .alert-danger').append('</div>');
            $('#contactForm').trigger("reset");
            console.log("Server error, please try again later.")
        },
        complete: function() {
        	console.log("Query completed.")}
    });
    return false;
            
}

$("form").submit(function() {
	      update(); 
	      return false;
          });

  $("img").on("contextmenu", function() {
    return false;
  });
  

  $("#owl-captions").owlCarousel({

    navigation: false, 
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });

  $("#owl-team").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });

});
