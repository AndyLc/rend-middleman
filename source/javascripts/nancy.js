$(document).ready(function() {
  $('div.buttons div.show').click(function() {
    $('div.about').addClass('expanded');
    $('div.about').removeClass('hide');
  })
  $('div.buttons div.hide').click(function() {
    $('div.about').removeClass('expanded');
    $('div.about').addClass('hide');
  })
})
