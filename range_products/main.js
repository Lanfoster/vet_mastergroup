define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
        var popContainer = container.find( ".popup").css( { opacity : 0 } );

        /**/
        var blocs = [];
        var blocsId = [];
        popContainer.find( ".bloc").css({opacity:0, display:'none'}).each( function( item ) {
          blocs.push( $(this) );
          blocsId.push( $(this).attr( 'id') );
        });


        var currentBlocIndex;
        var currentBloc;

        // OPEN
        //          
        container.find( ".introBloc" ).click(function() {
          popContainer.css({ display: "block" }).transition({ opacity : 1}, 500);
          var link = $(this).data("link");

          currentBlocIndex = _.indexOf( blocsId, link );
          currentBloc = blocs[ currentBlocIndex ];

          currentBloc.css({display:'block', x: 0 }).delay(500).transition({ opacity : 1}, 500);;
        });

        container.find( ".popBtn").click(function()
        {
          var idPopin = $(this).data('popin');
          console.log( '.popin.'+idPopin+'' );
          //popContainer2.css({ display: "block" }).transition({ opacity : 1}, 500);
          container.find('.popin.'+idPopin+'').css({ opacity: 0, display:'block', x: 0 }).delay(500).transition({ opacity : 1}, 500);;
        });

        container.find( ".popin .close").click(function()
        {
          //popContainer2.transition({ opacity : 0}, 500, function() { this.css({display:'none'});})
          container.find('.popin').transition({ opacity : 0, delay:200},500, function() { this.css({display:'none'});})
        });

        // CLOSE
        //
        popContainer.find( ".bloc .close" ).click(function() {
          currentBloc.transition({ opacity : 0}, 500, function() { currentBloc.css({display:'none'});})
          popContainer.transition({ opacity : 0, delay:200},500, function() { popContainer.css({display:'none'});})
        });

        // NEXT
        //
        popContainer.find( ".nextBtn" ).click(function() {
          var next = currentBloc;
          currentBloc.transition({ opacity : 0, x: -100 }, 500, function() { next.css({display:'none', x: 0});})
          if( ++currentBlocIndex >= blocsId.length ) currentBlocIndex = 0;
          currentBloc = blocs[ currentBlocIndex ];
          currentBloc.css({display:'block', x: 100, opacity : 0 }).transition({ opacity : 1, x: 0 },500);
        });

        // PREV
        //
        popContainer.find( ".prevBtn" ).click(function() {
          var next = currentBloc;
          currentBloc.transition({ opacity : 0, x: 100 }, 500, function() { next.css({display:'none', x: 0});})
          if( --currentBlocIndex <= 0 ) currentBlocIndex = blocsId.length - 1;
          currentBloc = blocs[ currentBlocIndex ];
          currentBloc.css({display:'block', x: -100, opacity : 0 }).transition({ opacity : 1, x: 0 },500);
        });

        //****///

        container.find( ".pageTitle").css( { opacity : 0, y: -50 } );

        container.find(".introBloc").eq(0).css({ opacity:0, x:-25 });
        container.find(".introBloc").eq(1).css({ opacity:0, y:-25  });
        container.find(".introBloc").eq(2).css({ opacity:0, x:25  });

        container.find(".introBloc").eq(3).css({ opacity:0, x:-25 });
        container.find(".introBloc").eq(4).css({ opacity:0 });
        container.find(".introBloc").eq(5).css({ opacity:0, x:25  });

        container.find(".introBloc").eq(6).css({ opacity:0, x:-25 });
        container.find(".introBloc").eq(7).css({ opacity:0, y:25  });
        container.find(".introBloc").eq(8).css({ opacity:0, x:25  });
      },

    	show: function( container ) {
        var that = this;
        container.find( ".pageTitle" ).transition({ opacity:1, y:0, delay:300 }, 700, 'ease');

        container.find(".introBloc").eq(0).transition({ opacity:1, y:0, x:0, delay:700 }, 700, 'ease');
        container.find(".introBloc").eq(1).transition({ opacity:1, y:0, x:0, delay:800 }, 700, 'ease');
        container.find(".introBloc").eq(2).transition({ opacity:1, y:0, x:0, delay:700 }, 700, 'ease');

        container.find(".introBloc").eq(3).transition({ opacity:1, y:0, x:0, delay:1300 }, 700, 'ease');
        container.find(".introBloc").eq(4).transition({ opacity:1, y:0, x:0, delay:1400 }, 700, 'ease');
        container.find(".introBloc").eq(5).transition({ opacity:1, y:0, x:0, delay:1300 }, 700, 'ease');

        container.find(".introBloc").eq(6).transition({ opacity:1, y:0, x:0, delay:1900 }, 700, 'ease');
        container.find(".introBloc").eq(7).transition({ opacity:1, y:0, x:0, delay:2000 }, 700, 'ease');
        container.find(".introBloc").eq(8).transition({ opacity:1, y:0, x:0, delay:1900 }, 700, 'ease');
    	}

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});