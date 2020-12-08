document.addEventListener("DOMContentLoaded", function() {

//location click
function openLocation() {
	var locationBtn = document.querySelector('.location')
	var locationBtnMobile = document.querySelector('.mobile_info__geo')
	var locationMenu = document.querySelector('.header_loc')
	var mobileMenu = document.querySelector('.mobile_menu');
	var locationBtnClose = document.querySelector('.header_loc__item--close')

	locationBtn.addEventListener('click', function(event) {

		locationMenu.classList.toggle('header_loc--active');
	})

	locationBtnMobile.addEventListener('click', function(event) {
		mobileMenu.classList.remove('mobile_menu--active');
		locationMenu.classList.toggle('header_loc--active');
	})

	locationBtnClose.addEventListener('click', function(event) {
		locationMenu.classList.toggle('header_loc--active');
	})


}
openLocation();


//mobile open menu
function mobileOpenMenu(){
	var locationMenu = document.querySelector('.header_loc');
	var burger = document.querySelector('.mobile_info__burger');
	var mobileMenu = document.querySelector('.mobile_menu');
	var mobileInfoBlock = document.querySelector('.mobile_info');

	burger.addEventListener('click', function() {
		locationMenu.classList.remove('header_loc--active');
		mobileMenu.classList.toggle('mobile_menu--active');
		mobileInfoBlock.classList.toggle('mobile_info--active');
	})
}
mobileOpenMenu();

//search animation input
function searchAnitmationInput() {
	var butsSearch = document.querySelectorAll('.search_form__btn');
	var searchInput = document.querySelector('.search_form__input');


	for(var i = 0; i < butsSearch.length; i++){
		butsSearch[i].addEventListener('click', function(event) {
			this.parentElement.classList.toggle('search_form--active');
			searchInput.focus();
		});
		searchInput.addEventListener('blur', function(event){
			this.parentElement.classList.remove('search_form--active');
		});
	}




}
searchAnitmationInput();





//append phone link
function appendPhoneLink(){
	var phoneElements = document.querySelectorAll('.pone_item');

	for(var i = 0; i < phoneElements.length; i++) {
		var newLink = 'tel:+7' + phoneElements[i].textContent.replace(/-/g, "").replace(/ /g, "").slice(1)
		phoneElements[i].href = newLink;
	}

}
appendPhoneLink()


//Promo slider
$('.promo_slider').slick({
	prevArrow: $('.slider_nav__prev'),
	nextArrow: $('.slider_nav__next'),	
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 4000,
});

//Licences slider
$('.licences_slider').slick({
	prevArrow: $('.licences_nav__prev'),
	nextArrow: $('.licences_nav__next'),	
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	responsive: [
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
		}
	}
	]
});




//portfolio slider
$('.promo_text_slider').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
});

$('.port_slider').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
});


$('.promo_text_nav__left').on('click', function() {
	$('.promo_text_slider').slick('slickPrev');
	$('.port_slider').slick('slickPrev');
})

$('.promo_text_nav__right').on('click', function() {
	$('.promo_text_slider').slick('slickNext');
	$('.port_slider').slick('slickNext');
})


//About us slider
$('.special_slider').slick({
	prevArrow: $('.special_nav__left'),
	nextArrow: $('.special_nav__right'),	
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	dots: true
});

// About Thanks slider
$('.thanks_slider').slick({
	prevArrow: $('.thanks_nav__left'),
	nextArrow: $('.thanks_nav__right'),	
	slidesToShow: 1,
	infinite: true,
	arrows: true,
});


// About Thanks slider
$('.thanks_text_slider').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
});

$('.thanks_nav__left').on('click', function() {
  $('.thanks_text_slider').slick('slickPrev');
});
$('.thanks_nav__right').on('click', function() {
  $('.thanks_text_slider').slick('slickNext');
});


//About Partners slider
$('.project_slider').slick({
	prevArrow: $('.project_nav__left'),
	nextArrow: $('.project_nav__right'),	
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	dots: true
});


//Hover on slide in about page

function hoverSlideAboutPage() {
	var sliderGeneral = document.querySelector('.thanks_slider');
	var thanksTextSlider  = document.querySelector('.thanks_text_slider');
	sliderGeneral.addEventListener('mouseover', function() {
		thanksTextSlider.classList.add('thanks_text_slider--show')
	})
	sliderGeneral.addEventListener('mouseout', function() {
		thanksTextSlider.classList.remove('thanks_text_slider--show')
	})
}
if(document.querySelector('.thanks_slider')){
	hoverSlideAboutPage();
}


//Portfolio counterText slider

function counterThanksSlider() {
	var slider 		 = $('.thanks_slider');
	var total        = slider.slick("getSlick").slideCount;
	var currentSlide = $('.thanks_slider').slick('slickCurrentSlide');
	var slide        = currentSlide + 1;
	if ( total > 1 && total < 10 ) {
		$(".thanks_count__prev").text('0' + slide);
		$('.thanks_count__next').text( '0' + total);
	} else {
		$(".thanks_count__prev").text('0' + slide);
		$('.thanks_count__next').text(total);
	}
	$(".thanks_slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		if(currentSl < 10) {
			$(".thanks_count__prev").text('0' + currentSl);		
		} else {
			$(".thanks_count__prev").text(currentSl);	
		}
	})
}

counterThanksSlider()


//Portfolio counterText slider

function counterTextSlider() {
	var slider 		 = $('.port_slider');
	var total        = slider.slick("getSlick").slideCount;
	var currentSlide = $('.port_slider').slick('slickCurrentSlide');
	var slide        = currentSlide + 1;
	if ( total > 1 && total < 10 ) {
		$(".slide_text_counter__prev").text('0' + slide);
		$('.slide_text_counter__next').text( '0' + total);
	} else {
		$(".slide_text_counter__prev").text('0' + slide);
		$('.slide_text_counter__next').text(total);
	}
	$(".port_slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		if(currentSl < 10) {
			$(".slide_text_counter__prev").text('0' + currentSl);		
		} else {
			$(".slide_text_counter__prev").text(currentSl);	
		}
	})
}

counterTextSlider()



//portfolio text slider arrow antimation

function arrowAnitmation() {
	var slideLinks = document.querySelectorAll('.promo_text_slide a');
	var arrow = document.querySelector('.promo_text_arrow');


	for (var i = 0; i < slideLinks.length; i++) {
		slideLinks[i].addEventListener('mouseover', function(){
			arrow.classList.add('promo_text_arrow--hover');
		})
		slideLinks[i].addEventListener('mouseout', function(){
			arrow.classList.remove('promo_text_arrow--hover');
		})
	}

}
arrowAnitmation();



// Animate number
function animateNumber(){
	var numbers;
	numbers = document.getElementsByClassName('num_item_anim');
	var numbersFirst = numbers[0] || null,
	numbersSecond = numbers[1] || null,
	numbersThird = numbers[2] || null;



	function animateNumbers(elem, speedAnimate, step, type){
		type = document.querySelector('.numbers_block').getAttribute('data-type');
		var number;
		number = elem;
		var numberTop;
		if(number) {
			numberTop = number.getBoundingClientRect().top - 400;
	


		var start = +number.innerHTML,
		end = +number.dataset.max;

		if(type === 'scroll'){
					window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2)  {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					start = start + step
					number.innerHTML = ++start;
					if(start >= end) {
						clearInterval(interval);
						number.innerHTML = end
					}
				}, speedAnimate)
			}
		})
		} else {
									var interval = setInterval(function() {
					start = start + step
					number.innerHTML = ++start;
					if(start >= end) {
						clearInterval(interval);
						number.innerHTML = end
					}
				}, speedAnimate)
		}

	}
		}

	if(numbers) {
		animateNumbers(numbersFirst, 200, 1);
		animateNumbers(numbersSecond, 50, 1);
		animateNumbers(numbersThird, 1, 150);

	}


}

		animateNumber()



// putGuttersWidth
function putGuttersWidth() {
	var widthBody = document.querySelector('body').offsetWidth
	var widthGutters = ((widthBody - 1180) / 2)

	var gutters = document.querySelectorAll('.gutters')

	for(var i = 0; i < gutters.length; i++){
		gutters[i].style.width = widthGutters + 'px';
	}

}
putGuttersWidth();


//Mask input
$("input[type=tel").mask("+9(999) 999-9999");


//Top button
$(window).scroll(function() {
	if($(this).scrollTop() > 2000) {
		$('#topNubex').fadeIn();
	} else {
		$('#topNubex').fadeOut();
	}
});

$('#topNubex').click(function() {
	$('body,html').animate({scrollTop:0},700);
})






//down scroll
$('.promo_port__btn').click(function(event) {
	var heightWindow = document.querySelector('.promo_port').clientHeight;
	event.preventDefault();
	$('body,html').animate({scrollTop:heightWindow},700);
})



});
