define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;

        container.find(".popup .bloc").css({ opacity: 0, scale:.9 }).fadeOut();

        container.find( ".introBloc li").click( function() {
          var bloc = container.find('.popup .'+$(this).data('link')).eq(0);

           if(bloc.length != 0) container.find(".popup").fadeIn(function(){ bloc.show().transition({ opacity:1, scale:1 }) });
        })

        container.find( ".popup .close").click( function() {
          slide = 1;
          container.find(".popup .bloc").transition({ opacity:0, scale:.9 }, function(){ container.find(".popup, .popup .bloc").fadeOut() });
        })

         container.find( ".popup .loupe").click( function() {
          window.location.hash = window.location.hash + "/viewer/protect";
        })

        //****///

        var slide = 1;
        container.find('.navleft').click(function(){  slide--; slider(this); });
        container.find('.navright').click(function(){ slide++; slider(this); });

        function slider(t)
        {
          slide = slide > 3 ? 1 : slide < 1 ? 3 : slide;
          $(t).parents('.bloc').transition({ opacity:0, scale:.9 }, 200, function(){ $(this).fadeOut(); container.find('.slide'+slide).show().transition({ opacity:1, scale:1 }); });
        }

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