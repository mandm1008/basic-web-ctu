$(document).ready(() => {
  $('#d1').html($(window).width());
  $('#d2').html($(window).height());
  $('#d3').html($('#div1').width());
  $('#d4').html($('#div1').height());
  $('#d5').html($('#div1').innerWidth());
  $('#d6').html($('#div1').innerHeight());
  $('#d7').html($('#div1').outerWidth());
  $('#d8').html($('#div1').outerHeight());
  $('#d9').html($('#div1').outerWidth(true));
  $('#d10').html($('#div1').outerHeight(true));
  $('#d11').html($(window).width() - $('#div1').outerHeight());
  $('#d12').html($(window).height() - $('#div1').outerHeight());

  $('#div2').css({ width: $(window).width() / 2, height: $(window).height() / 3 }).removeClass('box2').addClass('box3')
})
