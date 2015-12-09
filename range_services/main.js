define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".introBloc li").click( function() {
          container.find(".popup").fadeIn(function(){ container.find('.'+$(this).data('link')).transition({ opacity:1, scale:1 }) });
        })

        container.find( ".popup .close").click( function() {
          container.find(".popup .bloc").transition({ opacity:0, scale:.9 }, function(){ container.find(".popup").fadeOut() });
        })

         container.find( ".popup .zoom").click( function() {
          window.location.hash = window.location.hash + "/viewer/protect";
        })

        //****///

        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );

        container.find( ".introBloc.prescription").css( { opacity : 0, x: -50 } );
        container.find( ".introBloc.data").css( { opacity : 0, y: -50 } );
        container.find( ".introBloc.services").css( { opacity : 0, x: 50 } );
        container.find( ".introBloc.education").css( { opacity : 0, y: 50 } );
      },

    	show: function( container ) {
        var that = this;
        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');

        container.find( ".introBloc.prescription"  ).transition( { opacity : 1, y:0, x: 0, delay:700 }, 700, 'ease');
        container.find( ".introBloc.data" ).transition( { opacity : 1, y:0, x: 0, delay:800 }, 700, 'ease');
        container.find( ".introBloc.services"      ).transition( { opacity : 1, y:0, x: 0, delay:900 }, 700, 'ease');
        container.find( ".introBloc.education"     ).transition( { opacity : 1, y:0, x: 0, delay:1000 }, 700, 'ease');
    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});