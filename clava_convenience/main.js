define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find('.tableTitle').css({ opacity: 0, x: -30});

        container.find('.table tr').css({ opacity: 0, y: 30});
        container.find('ul li').css({ opacity: 0, x:-30 });

        container.find('.easy').css({ opacity: 0, x: 50});
        container.find('.pillsPack').css({ opacity: 0, x: 50});
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');
        container.find( ".tableTitle" ).transition( { opacity : 1, y:0, delay:900 }, 700, 'ease');
        container.find( ".table tr" ).each( function(index, item) {
            $(item).transition( { opacity : 1, y:0, delay:1100+index*100 }, 700, 'ease');
        });
        container.find( "ul li" ).each( function( index, item) {
            $(item).transition( { opacity : 1, x:0, delay:2000+index*150 }, 700, 'ease');
        });

        container.find( ".easy" ).transition( { opacity : 1,  x: 0, delay:3100 }, 700, 'ease');
        container.find( ".pillsPack" ).transition( { opacity : 1,  x: 0, delay:3000 }, 700, 'ease');

    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});