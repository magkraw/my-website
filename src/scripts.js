$(document).ready(function(){
  var a = $('nav').find('a');

  a.mouseover(function(){
    $(this).css('color','#CC0033');
  });

  a.mouseout(function(){
    $(this).css('color','#444');
  });

  $('.about__family').cycle({
    fit: 1,
    delay: 500,
    timeout: 2000,
  });
  $('.about__animals').cycle({
    fit: 1,
    delay: 700,
    timeout: 2500,
  });
  $('.about__life').cycle({
    fit: 1,
    delay: 300,
    timeout: 2300,
  });
  $('.about__change').cycle({
    fit: 1,
    delay: 100,
    timeout: 2700,
  });
  $('.about__activ').cycle({
    fit: 1,
    delay: 200,
    timeout: 2600,
  });
  $('.about__travel').cycle({
    fit: 1,
    delay: -100,
    timeout: 2800,
  });

  $(window).scroll(function() {
    if (this.scrollY > 1) {
      $('.navbar').addClass('navbar--scrolled');
    } else {
      $('.navbar').removeClass('navbar--scrolled');
    }
  });

  window.dispatchEvent(new Event('scroll'));

  $('a[href*="#"]')
  .not('[href="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      &&
      location.hostname === this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
});
