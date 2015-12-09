define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find( ".img").css( { opacity : 0, scale: .9 } );
      },

      show: function( container ) {
        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
        container.find( ".img").transition( { opacity : 1, scale: 1, delay:800 }, 500);
      }

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});