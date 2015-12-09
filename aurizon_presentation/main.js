define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container ) {
      container.find(".supshow").css( { opacity : 0 } );
      container.find(".bloc").css( { opacity : 0, scale: .8 } );
    },

    show: function( container ) {
      container.find(".supshow").transition( { opacity : 1 }, 700, 'ease');
      container.find(".bloc").transition( { opacity : 1, scale:1, delay:700 }, 700, 'ease');
      
    }

  }
  
  return script;
});