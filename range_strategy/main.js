define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;

        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});