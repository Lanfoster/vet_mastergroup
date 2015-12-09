define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find(".pageTitle").css( { opacity : 0, y: -50 } );
      container.find(".supshow").css( { opacity : 0, x : 50 } );
      container.find(".listeplay li").css( { opacity : 0, x: -50 } );
      container.find(".bloc").css( { opacity : 0 } );
      container.find(".bloc li").css( { opacity : 0, y: 50 } );
      container.find(".bloc .tabletitle").css( { opacity : 1, y : 0 } );

      var popin = container.find('#popin'),
          pop   = container.find('.pop');

      container.find('#popin .close').click( function() { popin.hide(); pop.hide(); });
      container.find('#popin .close1').click( function() { container.find(this.parentNode).hide(); });
      container.find('.popBtn').click( function()
      {
        popin.show();
        container.find('.pop.'+this.getAttribute('data-popin')).show();
      });

      popin.hide();
      pop.hide();
    },

    show: function( container )
    {
      container.find(".pageTitle").transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
      container.find(".supshow").transition( { opacity : 1, x : 0, delay:600 }, 700, 'ease');

      var start = 5;
      container.find(".listeplay li").each(function(){ start++; container.find(this).transition({ opacity : 1, x: 0, delay:200*start }, 700, 'ease'); });
      container.find(".bloc").transition( { opacity : 1, delay:200*start }, 700, 'ease');
      container.find(".bloc li").each(function(){ start++; container.find(this).transition({ opacity : 1, y: 0, delay:150*start }, 700, 'ease'); });
    }

  }
  
  return script;
});