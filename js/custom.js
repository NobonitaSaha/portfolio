// Sticky Menu
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}
	else{
		$('nav').removeClass('black');
	}
})
$(document).ready(function(){
	$('.menu h4').click(function(){
		$("nav ul").toggleClass("active")
	})
})
			
// Filter Protfolio
const filterContainer = document.querySelector(".protfolio-filter"),
protfolioItems = document.querySelectorAll(".protfolio-item");

filterContainer.addEventListener("click", (event) =>{
	if(event.target.classList.contains("filter-item")){
		filterContainer.querySelector(".active").classList.remove("active");
		event.target.classList.add("active");
		const filterValue = event.target.getAttribute("data-filter");
		protfolioItems.forEach((item) =>{
		if(item.classList.contains(filterValue) || filterValue === 'all'){
			item.classList.remove("hide");
			item.classList.add("show");
		}
		else{
			item.classList.remove("show");
			item.classList.add("hide");
	   }
	 });
   }
});
			
// Add smooth scrolling to all links
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1400, function(){
			window.location.hash = hash;
			});
		} 
	});
});

// Testimonials
$(document).ready(function(){
  $("#testimonial .indicators li").click(function(){
    var i = $(this).index();
    var targetElement = $("#testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            $("#testimonial .tabs li").click(function(){
                var targetElement = $("#testimonial .tabs li");
                targetElement.addClass('active');
                targetElement.not($(this)).removeClass('active');
            });
        });
$(document).ready(function(){
    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});

// Counter
$('.counter').counterUp({
	delay: 10,
	time: 800
});


// Fadin In Scroll
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(100,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(100,1);}
      }
    });
  }).scroll();
});