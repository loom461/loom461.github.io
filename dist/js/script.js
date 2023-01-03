$(document).ready(function(){
	new WOW().init();


	/* move background with cursor (breaks on mobile and high definition so don't use)*/
	/* const el = document.querySelector(".main");
	el.addEventListener("mousemove", (e) => {
	el.style.backgroundPositionX = -e.pageX / 50 + "px";
	el.style.backgroundPositionY = -e.pageY / 50 + "px";
	console.log(e);
	}); */
	/* function toggleActive(x){
        $(x).each(function(i){
			$(this).click(function(e){
				$(x).eq(i).attr('class', "path active")
	
			})
		});
		$(".active").each(function(i){
			$(this).click(function(e){
				$("path").eq(i).attr('class', "path")
			})
		});
    } */
	function toggleActive(x){
		if ((x).attr('class')=="path")
		{
			(x).attr('class', "active")
			console.log("true", x)
			/* $(x).attr('class', "active") */
		}
		else
		{
			(x).attr('class', "path")
			console.log("false", x)
			/* $(x).attr('class', "path") */
		};
		

    };
	$("path").click(function(e){
		toggleActive($(this))
	});
	/* $(".active").each(function(i){
		$(this).click(function(e){
			$("path").eq(i).attr('class', "path")
		})
	}); */

	$(window).scroll(function(){
		if ($(window).width() > 767) { //> 576 default
			if ($(this).scrollTop() < 60 ){
				console.log("true")
				$('.header').css({"background" : "none", "border-bottom" : "none", "opacity" : "1", "display" : "block" , "position" : "absolute"});
				/* $('.main__wrapper').css({"margin-top" : "165px"});
				$('.main').css({"padding-top" : "0"}); */
			}
			else if ($(this).scrollTop() > 60 && $(this).scrollTop() <850 ){
				$('.header').css({"background" : "none", "border-bottom" : "none"/* , "opacity" : "0", "display" : "none"  *//* , "position" : "absolute" */});
				/* $('.main__wrapper').css({"margin-top" : "0"});
				$('.main').css({"padding-top" : "225px"}); */
				$('.header').fadeOut(70);
				/* $('.header').fadeOut(200); */
			}
			else if ($(this).scrollTop() > 850 ){
				$('.header').fadeIn(70);
				$('.header').css({"background" : "#1D1D1D"/* , "box-shadow" : "0px 0px 29px rgba(0, 0, 0, 0.33)" *//* , "opacity" : "1", "display" : "block" */, "border-bottom" : "1px solid #0C0C0C", "position" : "fixed"});
			}
			else{
				$('.header').fadeOut(200);
			}
		}
		else{
			$('.header').css({"background" : "linear-gradient(78.47deg, #143B75 0%, #0094D2 100%)", "border-bottom" : "none"});
			return;
		}
    });
	$('.hamburger').click(function(){
		$('.header__links').toggleClass("header__links_active")
		$('.hamburger').toggleClass("hamburger_active")

	})
	$('.header__links').click(function(){
		$('.header__links').toggleClass("header__links_active")
		$('.hamburger').toggleClass("hamburger_active")

	})
});
