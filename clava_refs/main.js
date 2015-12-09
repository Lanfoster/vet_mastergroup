define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find('ol li').css({ opacity: 0, x:-30 });
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
        container.find( "ol li" ).each( function( index, item) {
            $(item).transition( { opacity : 1, x:0, delay:600+index*150 }, 700, 'ease');
        });

    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});