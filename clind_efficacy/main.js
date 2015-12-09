define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find(".pageTitle").css( { opacity : 0, y: -50 } );
      container.find(".supshow").css( { opacity : 0 } );
      container.find("h2").css( { opacity : 0, x: -50 } );
      container.find(".listeplay li").css( { opacity : 0, y: 20 } );
    },

    show: function( container )
    {
      container.find(".pageTitle").transition( { opacity : 1, y: 0, delay:600 }, 700, 'ease' );
      container.find(".supshow").transition( { opacity : 1, delay:600 }, 700, 'ease');

      var start = 5;
      container.find("h2").each(function(){ start++; container.find(this).transition({ opacity : 1, x: 0, delay:200*start }, 700, 'ease'); });
      container.find(".listeplay li").each(function(){ start++; container.find(this).transition({ opacity : 1, y: 0, delay:150*start }, 700, 'ease'); });
    }

  }
  
  return script;
});