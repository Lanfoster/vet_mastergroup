define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );
        container.find('.cat').css({ opacity: 0});
        container.find('ul.intro li').css({ opacity: 0, x:-30 });

        var popup = container.find('.popup');
        container.find('.popup .close').click( function() {
            popup.hide();
            container.find('.bloc').hide();
        })

        container.find('.URTD .popBtn').click( function() {
            popup.show();
            container.find('.bloc.treatments').show();
        })

        container.find('.resistance .popBtn').click( function() {
            popup.show();
            container.find('.bloc.cats').show();
        })

        container.find('.first .popBtn').click( function() {
            popup.show();
            container.find('.bloc.picturePop').show();
        })

        container.find( ".bloc.picturePop .zoom").click( function() {
          window.location.hash = window.location.hash + "/viewer/protect";
        })
      },

    	show: function( container ) {
        var that = this;

        container.find( ".pageTitle" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');

        container.find( ".cat" ).transition( { opacity : 1, x:0, delay:900 }, 700, 'ease');
        container.find( "ul.intro li" ).each( function( index, item) {
            $(item).transition( { opacity : 1, x:0, delay:900+index*150 }, 700, 'ease');
        });

    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});