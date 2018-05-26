// Setting Up Handlebars
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first post!"};
var html = template(context);

var location = document.getElementById("handlebars-here").innerHTML;
location.appendChild(html);



// Navbar Disappear and Reappear
(function() {      
    var documentElem = $(document),
        nav = $('nav'),
        lastScrollTop = 0;
    
    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrollTop();
        
        //scroll down
        if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
        //scroll up
        else nav.removeClass('hidden');
        
        lastScrollTop = currentScrollTop;
    });
})();

// Submist Button Under Contruction Alert Message
// onclick="submitAlert()" Add this code to sumbit button if using below code
var submitAlert = function() {
    event.preventDefault();
    alert("This is under construction. Please connect with me on LinkedIn.");
}

// Footer Home Page Functionality
var homeScroll = function() {
    window.scrollTo(0, 0);
}

