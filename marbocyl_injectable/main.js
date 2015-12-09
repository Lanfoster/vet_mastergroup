define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find('h1').css( { opacity : 0, y : -50 } );
      container.find('img, ul li').css( { opacity : 0, y : 40 } );
    },

    show: function( container )
    {
      var pause = 0, next = [];

      container.find('h1, img, ul li').each(function(){ next.push([this, 1]) });

      for(var i in next)
      {
        if(isNaN(next[i][0])) container.find(next[i][0]).transition( { opacity : next[i][1], y : 0, x : 0, delay:200*(parseInt(i)+2+pause) }, 700, 'ease');
        else pause += next[i][0];
      }
    }

  }
  
  return script;
});