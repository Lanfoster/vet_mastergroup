define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find('.page-bg').css({ opacity: 0 });
        container.find('.animals').css({ opacity: 0, x:-50 });
        container.find('.pack-l').css({ opacity: 0, x:150 });
        container.find('.pack-r').css({ opacity: 0, x:150 });
        container.find('.easy').css({ opacity: 0, x:150 });
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
        container.find( ".page-bg" ).transition( { opacity : 1 }, 700, 'ease');

        container.find( ".animals" ).transition( { opacity : 1, x:0, delay:900 }, 700, 'ease');
        container.find( ".pack-l" ).transition( { opacity : 1, x:0, delay:1200 }, 700, 'ease');
        container.find( ".pack-r" ).transition( { opacity : 1, x:0, delay:1300 }, 700, 'ease');
        container.find( ".easy" ).transition( { opacity : 1, x:0, delay:1400 }, 700, 'ease');
    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});