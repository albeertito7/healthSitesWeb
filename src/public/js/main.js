$(document).ready(function () {
	AOS.init();

	let pathname = window.location.pathname, pages = ["/", "/about-us", "/app", "/contact", "/privacy-policy"]
	pages.find(function (el, idx, arr) {
		if (el == pathname) {
			$('.nav-item.active').removeClass("active");
			$('.nav-item:nth-child(' + (idx + 1) + ')').addClass('active'); 
		}
	});

	$.getJSON('js/lang.json', function (json) {

		if(!localStorage.getItem('lang')) {
			localStorage.setItem('lang', 'en');
		}

		let def = localStorage.getItem("lang");
		$(".lang").val(def);

		$(".tr").each(function (index, value) {
			$(this).html(json[def][$(this).attr('key')]);
		});

		$(".lang").change(function () {
			let lang = $(this).val();
			if(!localStorage.getItem('lang') != lang) {
				localStorage.setItem('lang', lang);
				$(".tr").each(function (index, value) {
					$(this).html(json[lang][$(this).attr('key')]);
				});
			}
		});
	});
});

function goToAboutUs() { location.href = "/about-us" }

function goToApp() { location.href = "/app" } 

function goToContact() { location.href = "/contact" } 