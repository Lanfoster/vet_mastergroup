define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
       //****///

        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );

        container.find( ".title").css( { opacity : 0, x: -50 } );
        container.find( ".desc").css( { opacity : 0, x: -50 } );
        container.find( ".part li").css( { opacity : 0, x: -50 } );
        container.find( ".bloc").css( { opacity : 0, y: 50 } );


      },

      show: function( container ) {
        var that = this;
        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');

        container.find( ".part.expertise .title" ).transition( { opacity : 1, x:0, delay:600 }, 700, 'ease');
        container.find( ".part.expertise .desc" ).transition( { opacity : 1, x:0, delay:700 }, 700, 'ease');

        container.find( ".part.Leadership .title" ).transition( { opacity : 1, x:0, delay:1600 }, 700, 'ease');
        container.find( ".part.Leadership .desc" ).transition( { opacity : 1, x:0, delay:1700 }, 700, 'ease');

        container.find( ".part.solutions .title" ).transition( { opacity : 1, x:0, delay:2600 }, 700, 'ease');
        container.find( ".part li").each( function(index, item) { 
          var delay = 2800+ index*100;
          $(item).transition( { opacity : 1, x:0, delay:delay }, 700, 'ease');
        });

         container.find( ".blocLeft" ).transition( { opacity : 1, y:0, delay:4200 }, 700, 'ease');
         container.find( ".blocRight" ).transition( { opacity : 1, y:0, delay:4000 }, 700, 'ease');


      }

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});