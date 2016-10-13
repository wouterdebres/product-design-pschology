// To show the grid, press Enter on keyboard
$(document).keypress(function(e) {
  if(e.which == 13) {
    $('#grid').toggleClass('show').css('height', $(document).height());
  }
});

$(document).ready(function(){
});