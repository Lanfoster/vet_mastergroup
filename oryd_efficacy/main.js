define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find('h1').css( { opacity : 0, y : -50 } );
      container.find('.item, .item ul li, .conclusion').css( { opacity : 0, y : 40 } );
      container.find('.visu').css( { opacity : 0, x : 50 } );

      container.find('.popins').hide();
      container.find('.popins .bloc .close').click( function() {
        $(this).parents('.popins').first().hide();
      });

      var index = 1;

      container.find('.pageTitle .popBtn').click( function() {
        index = 1;
        container.find('.popins').show();
        container.find('.popins .bloc').hide();
        container.find('.popins .bloc1').show();
      });

      container.find('.popins .popArrow.nextBtn').click( function() {
        if( ++index > 4 ) index = 1;
        container.find('.popins .bloc').hide();
        container.find('.popins .bloc'+index).show();
      });

      container.find('.popins .popArrow.prevBtn').click( function() {
        if( --index < 1 ) index = 4;
        container.find('.popins .bloc').hide();
        container.find('.popins .bloc'+index).show();
      });
    },

    show: function( container )
    {
      var pause = 0, next = [];

      container.find('h1').each(function(){ next.push([this, 1]) });
      next.push([1]);
      container.find('.item, ul li, .conclusion').each(function(){ next.push([this, 1]) });

      container.find('.conclusion').each(function(){ next.push([this, 2]) });

      for(var i in next) {
        if(isNaN(next[i][0])) container.find(next[i][0]).transition( { opacity : next[i][1], y : 0, x : 0, delay:200*(parseInt(i)+2+pause) }, 700, 'ease');
        else pause += next[i][0];
      }

      container.find('.visu1').transition( { opacity : 1, y : 0, x : 0, delay: 1200 }, 700, 'ease');
      container.find('.visu2').transition( { opacity : 1, y : 0, x : 0, delay: 1300 }, 700, 'ease');
      
    }
    

  }
  
  return script;
});