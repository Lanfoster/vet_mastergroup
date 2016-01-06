define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;

        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find( ".subtitle,.bottitle,.graph").css( { opacity : 0, y: 50 } );
        
        container.find( ".redarrow,.redrect,.redtxt,.graph .lines li .txt").css( { opacity : 0 } );
        container.find( ".graph .lines .bars div").css( { scale : "0,1" } );
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
        container.find( ".subtitle" ).transition( { opacity : 1, y:0, delay:600 }, 700, 'ease');
        container.find( ".graph" ).transition( { opacity : 1, y:0, delay:800 }, 700, 'ease');
        container.find( ".bottitle" ).transition( { opacity : 1, y:0, delay:900 }, 700, 'ease');

        container.find( ".graph .lines .bars .bar1").each( function(index, item) {
         $(item).transition( { scale : 1 , delay:(1200+index*100) }, 700, 'ease');
        })

        container.find( ".redarrow" ).transition( { opacity : 1, delay:2800 }, 700, 'ease');
        container.find( ".graph .lines .bars .bar2").each( function(index, item) {
         $(item).transition( { scale : 1 , delay:(5500+index*100) }, 700, 'ease');
        })

        container.find( ".graph .lines .bars .med").each( function(index, item) {
         $(item).transition( { scale : 1 , delay:(5500+index*100) }, 700, 'ease');
        })

        
        container.find( ".redrect" ).transition( { opacity : 1, delay:6000 }, 700, 'ease');
        container.find( ".redtxt" ).transition( { opacity : 1, delay:6500 }, 700, 'ease');
        container.find( ".graph .lines li .txt" ).transition( { opacity : 1, delay:7500 }, 700, 'ease');
    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});