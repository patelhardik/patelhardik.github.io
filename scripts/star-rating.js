$(function(){
  $('.star_rating').rating();
});

/**
 * Star module
 * jayjamero@propertyguru.com.sg
**/
$.fn.rating = function() {
    var val = 0, size = 0, stars = 5;
    return this.each(function(i,e){ val = parseFloat($(e).text()); size = ( $(e).width() / stars ); $(e).html($('<span/>').animate({ width: val * size }, 1000 ) ); });
};
