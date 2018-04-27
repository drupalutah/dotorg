(function ($) {
  Drupal.behaviors.moreSession = {
    attach: function (context, settings) {
      $( ".session-toggle" ).click(function() {
        $(this).parent( ".session-description" ).toggleClass('closed').toggleClass('opened');
      });
    }
  };

})(jQuery);
