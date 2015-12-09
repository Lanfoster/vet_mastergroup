define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );

        container.find( ".part").css( { opacity : 0, x: -50 } );
        container.find( ".part .part2").css( { opacity : 0, x: -30 } );

        container.find( ".optimizedPic").css( { opacity : 0 } );
        container.find( ".optimizedPic .arrow").css( { opacity : 0, x: 50 } );

        container.find( ".clearness li").css( { opacity : 0, x: -50 } );
        container.find( ".packBack").css( { opacity : 0, x: 80 } );
        container.find( ".packBack2").css( { opacity : 0, x: 50 } );
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');

        container.find( ".qualitative" ).transition( { opacity : 1, x:0, delay:900 }, 700, 'ease');
        container.find( ".qualitative .part2" ).transition( { opacity : 1, x:0, delay:1600 }, 700, 'ease');

        container.find( ".optimized" ).transition( { opacity : 1, x:0, delay:2500 }, 700, 'ease');
        container.find( ".optimized .part2" ).transition( { opacity : 1, x:0, delay:3200 }, 700, 'ease');
        container.find( ".optimizedPic" ).transition( { opacity : 1, x:0, delay:3200 }, 700, 'ease');
        container.find( ".optimizedPic .particles" ).transition( { opacity : 1, x:0, delay:3600 }, 700, 'ease');
        container.find( ".optimizedPic .alluminium" ).transition( { opacity : 1, x:0, delay:3700 }, 700, 'ease');
        
        container.find( ".practical" ).transition( { opacity : 1, x:0, delay:4900 }, 700, 'ease');

        container.find( ".clearness" ).transition( { opacity : 1, x:0, delay:5900 }, 700, 'ease');
        container.find( ".clearness ul li" ).each( function( index, item) {
            $(item).transition( { opacity : 1, x:0, delay:6500+index*150 }, 700, 'ease');
        });

        container.find( ".packBack" ).transition( { opacity : 1,  x: 0, delay:6500 }, 700, 'ease');
        container.find( ".packBack2" ).transition( { opacity : 1,  x: 0, delay:6600 }, 700, 'ease');

    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});