$(document).ready(function() {
    var element = $('#dred');
    $(window).scroll(function(){
      element['fade'+ ($(this).scrollTop() > 200 ? 'In': 'In')](1000);
  });
});
