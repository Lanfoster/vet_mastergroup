define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find(".popup .bloc").css({ opacity:0, scale:.9 });
      container.find(".popBtn").click( function()
      {
        var bloc = container.find('.popup .'+$(this).data('popin')).eq(0);
        if(bloc.length != 0) container.find(".popup").fadeIn(function(){ bloc.show().transition({ opacity:1, scale:1 }) });
      });
      container.find(".popup .close").click( function()
      {
        container.find(".popup .bloc").transition({ opacity:0, scale:.9 }, function(){ container.find(".popup, .popup .bloc").fadeOut() });
      });

      /****/

      container.find(".pageTitle").css( { opacity : 0, y: -50 } );
      container.find(".supshow").css( { opacity : 0 } );
      container.find("h2").css( { opacity : 0, x: -50 } );
      container.find(".listeplay li").css( { opacity : 0, y: 20 } );
      container.find(".popBtn").css( { opacity: 0, scale: 0 } );
    },

    show: function( container )
    {
      container.find(".pageTitle").transition( { opacity : 1, y: 0, delay:600 }, 700, 'ease' );
      container.find(".supshow").transition( { opacity : 1, delay:600 }, 700, 'ease');

      var start = 5;
      container.find("h2").each(function(){ start++; container.find(this).transition({ opacity : 1, x: 0, delay:200*start }, 700, 'ease'); });
      container.find(".listeplay li").each(function(){ start++; container.find(this).transition({ opacity : 1, y: 0, delay:150*start }, 700, 'ease'); });

      container.find(".popBtn").each(function(i){ $(this).transition({ opacity:1, scale:1, delay:2000+i*400 }, 700, 'ease') });
    }

  }
  
  return script;
});