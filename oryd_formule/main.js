define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap )
{

  script =
  {
    vars: {},

    init: function( container )
    {
      container.find('h1').css( { opacity : 0, y : -50 } );
      container.find('.pack, .table, .table tr').css( { opacity : 0, y : 40 } );
      container.find('.buble').css( {scale : .8, opacity:0 } );
    },

    show: function( container )
    {
      var pause = 0, next = [];

      container.find('h1').transition( { opacity :1, y : 0 }, 700, 'ease');
      container.find('.pack').transition( { opacity :1, y : 0, delay: 500 }, 700, 'ease');
      container.find('.buble').transition( { opacity :1, scale : 1, delay: 800 }, 700, 'ease');
      container.find('.table').transition( { opacity :1, y : 0, delay: 800 }, 700, 'ease');

      container.find('.table tr').each(function( index, item){ 
         $(item).transition( { opacity :1, y : 0, delay: 1000+index*100 }, 700, 'ease');
      });

    

      
    }
    

  }
  
  return script;
});