define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find('h1').css( { opacity : 0, y : -50 } );
      container.find('.item, ul li').css( { opacity : 0, y : 40 } );
      container.find('.visu').css( { opacity : 0, x : 50 } );
      container.find('.popBtn').css( { scale : 0 } );

      container.find('.popin').hide();
      container.find('.popin .bloc .close').click( function() {
        $(this).parents('.popin').first().hide();
      });

      container.find('.pageTitle .popBtn').click( function() {
        container.find('.popin1').show();
      });

      container.find('.item .popBtn').click( function() {
        container.find('.popin2').show();
        container.find('.popin2 .bloc1').show();
        container.find('.popin2 .bloc2').hide();
        container.find('.popin2 .popArrow.nextBtn').show();
        container.find('.popin2 .popArrow.prevBtn').hide();
      });

      container.find('.popin2 .popArrow.nextBtn').click( function() {
        container.find('.popin2 .bloc2').show();
        container.find('.popin2 .bloc1').hide();
        container.find('.popin2 .popArrow.nextBtn').hide();
        container.find('.popin2 .popArrow.prevBtn').show();
      });

      container.find('.popin2 .popArrow.prevBtn').click( function() {
        container.find('.popin2 .bloc1').show();
        container.find('.popin2 .bloc2').hide();
        container.find('.popin2 .popArrow.nextBtn').show();
        container.find('.popin2 .popArrow.prevBtn').hide();
      });
    },

    show: function( container ) {
      var pause = 0, next = [];

      container.find('h1').each(function(){ next.push([this, 1]) });
      next.push([1]);
      container.find('.item, ul li, .conclusion').each(function(){ next.push([this, 1]) });

      for(var i in next) {
        if(isNaN(next[i][0])) container.find(next[i][0]).transition( { opacity : next[i][1], y : 0, x : 0, delay:200*(parseInt(i)+2+pause) }, 700, 'ease');
        else pause += next[i][0];
      }

      container.find('.visu1').transition( { opacity : 1, y : 0, x : 0, delay: 2200 }, 700, 'ease');
      container.find('.visu2').transition( { opacity : 1, y : 0, x : 0, delay: 2300 }, 700, 'ease');
      container.find('.popBtn').transition( {scale : 1 , delay: 2300 }, 700, 'ease');
      
    }
    

  }
  
  return script;
});