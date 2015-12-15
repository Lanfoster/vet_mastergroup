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
            popup.fadeOut();
            container.find('.bloc').fadeOut();
        })

        container.find('.URTD .popBtn').click( function() {
            popup.fadeIn();
            container.find('.bloc.treatments').fadeIn();
        })

        container.find('.resistance .popBtn').click( function() {
            popup.fadeIn();
            container.find('.bloc.cats').fadeIn();
        })

        container.find('.first .popBtn.pop1').click( function() {
            popup.fadeIn();
            container.find('.bloc.picturePop').fadeIn();
        })

        container.find('.first .popBtn.pop2').click( function() {
            popup.fadeIn();
            container.find('.bloc.AFVAC').fadeIn();
        })

        container.find('.popnav').click( function()
        {
            var current = $(this), cible = current.data('link');
            current.parents('.bloc').fadeOut(function()
            {
                container.find('.bloc.'+cible).fadeIn();
            })
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