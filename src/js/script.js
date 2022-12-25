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
});
