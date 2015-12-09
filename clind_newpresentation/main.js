define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find(".supshow").css( { opacity : 0 } );
    },

    show: function( container )
    {
      container.find(".supshow").transition( { opacity : 1, delay:600 }, 700, 'ease');
    }

  }
  
  return script;
});