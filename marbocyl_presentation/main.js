define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find("h2").css( { opacity : 0, x : -40 } );
      container.find(".supshow, .bloc").css( { opacity : 0 } );
      container.find(".listeplay li").css( { opacity : 0, y: 40 } );
    },

    show: function( container )
    {
      container.find(".supshow").transition( { opacity : 1, delay:600 }, 700, 'ease');

      var start = 5;
      container.find("h2").each(function(){ start++; container.find(this).transition({ opacity : 1, x: 0, delay:300*start }, 700, 'ease'); });
      container.find(".bloc").transition( { opacity : 1, delay:200*start }, 700, 'ease');
      start += 3;
      container.find(".listeplay li").each(function(){ start++; container.find(this).transition({ opacity : 1, y: 0, delay:200*start }, 700, 'ease'); });
    }

  }
  
  return script;
});