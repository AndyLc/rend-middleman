$(document).ready(function() {
	$('nav a').click(function(e){
		var url = $(this).attr('href');
    $('div#loader').remove();
    $('html').fadeOut(300, function() {
      window.location.href = url;
    })
		e.preventDefault();
	});
  if($('div.home').length > 0) {
    $('div#loader-wrapper').removeClass('hidden');
      setTimeout(function(){
    		$('body').addClass('loaded');
    	}, 1000);
  } else {
    $('html').hide();
    $('html').fadeIn(300);
  }
  $('div.social-icons img').mouseover(function() {
    $(this).attr('src', $(this).attr('src').split('-black')[0] + "-color.svg");
  });
  $('div.social-icons img').mouseout(function() {
    $(this).attr('src', $(this).attr('src').split('-color')[0] + "-black.svg");
  });
  $('div.hover-node div').mouseover(function() {
    $('div.' + $(this).attr('class')).find('div.circle-4').addClass('hovered');
    $('div.man-node-tooltips div.' + $(this).attr('class')).addClass('open');
  })
  $('div.hover-node div').mouseout(function() {
    $('div.' + $(this).attr('class')).find('div.circle-4').removeClass('hovered');
    $('div.man-node-tooltips div.' + $(this).attr('class')).removeClass('open');
  })
  $('div.hover-node div').click(function() {
    $('div.information').addClass('out');
    $('div.tooltips-expand div').addClass('out');
    $('div.tooltips-expand div.' + $(this).attr('class')).removeClass('out');
  })
  $('div.tooltips-expand a.back').click(function() {
    $('div.information').removeClass('out');
    $('div.tooltips-expand div').addClass('out');
  })
})
