$(document).ready(function(){	

  /*fancybox*/
  $("[data-fancybox]").fancybox({
    touch:false
  });

  /*Слайдер в баннере*/
	$('#bannerSlider').slick({
    arrows: true,
    dots: true
  });

  /*Меню*/
  $('#mainMenu .main-menu-visual').click(function(){
    $('#mainMenu').addClass('main-menu-active');
  });

  $('#mainMenu .main-menu-filter, #mainMenuClose').click(function(){
    $('#mainMenu').removeClass('main-menu-active');
  });

  /*Слайдер Наши работы*/
  $('#examplesSlider').slick({
    arrows: true,
    dots: true,
    infinite: false
  });

  /*Слайдер Нам доверют*/
  $('#clientSlider').slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /*Слайдер с примерами*/
  $('.example-slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  /*Табы, Цены*/
  $('#priceTabHead a').on('click', function(e){
    e.preventDefault();
    $('#priceTabHead a').removeClass('active');
    $(this).addClass('active');

    let tabLink = $(this).attr('href');
        tabLink.toString();

    $('#priceTabContent>.price-tab-content_item').removeClass('active');
    $(tabLink).addClass('active');
  });

  $('#priceSubTabHead a').on('click', function(e){
    e.preventDefault();
    $('#priceSubTabHead a').removeClass('active');
    $(this).addClass('active');

    let subTabLink = $(this).attr('href');
        subTabLink.toString();

    $('#priceSubTabContent>.price-tab-content_item').removeClass('active');
    $(subTabLink).addClass('active');
  });

  $('#priceTabSelect').change(function(e){
    e.preventDefault();

    let tabLink = $(this).val();
        tabLink.toString();

    $('#priceTabContent>.price-tab-content_item').removeClass('active');
    $(tabLink).addClass('active');
  });

  $('#priceSubTabSelect').change(function(e){
    e.preventDefault();

    let subTabLink = $(this).val();
        subTabLink.toString();

    $('#priceSubTabContent>.price-tab-content_item').removeClass('active');
    $(subTabLink).addClass('active');
  });
	
	/*

	$("a[href*='#']").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
	});*/
	
});