define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find('h1').css( { opacity : 0, y : -50 } );
      container.find('.content li, .popBtn').css( { opacity : 0, y : 40 } );

      // START popin

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

      // FIN popin
    },

    show: function( container )
    {
      var pause = 0, next = [];

      container.find('h1').each(function(){ next.push([this, 1]) });
      next.push([1]);
      container.find('.content li, .popBtn').each(function(){ next.push([this, 1]) });

      for(var i in next)
      {
        if(isNaN(next[i][0])) container.find(next[i][0]).transition( { opacity : next[i][1], y : 0, x : 0, delay:200*(parseInt(i)+2+pause) }, 700, 'ease');
        else pause += next[i][0];
      }
    }

  }
  
  return script;
});