define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find("img").css( { opacity : 0 } );

      container.find( ".img").click( function() {
        container.find( ".popup").fadeIn();
      });
      container.find( ".popup .close").click( function() {
        container.find( ".popup").fadeOut();
      });
    },

    show: function( container )
    {
      container.find("img").transition( { opacity : 1, delay:600 }, 700, 'ease');
    }

  }
  
  return script;
});