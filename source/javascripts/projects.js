// Project page prototype for checkdesk.
// 
// See also: reports.js
// 
$(document).ready(function() {
  // 
  // Eg: http://10.0.1.3:4567/prototype/desk/bellingcat?view=table
  // Will create a class on the body element "table"
  $('.js-queries').append("&nbsp;" + queries.view + " view");
  $('body').addClass(queries.view);

  // Staggered fade in
  // 
  $('.report').hide();
  $(window).load(function() {
    $(".report").each(function(i) {
       $(this).delay((i + 1) * 50).fadeIn();
    });
  });
});