define(['jquery', 'Backbone','underscore', 'transit', 'snap' ], function( $, Backbone, _, transit, Snap ) { 

    script = {

      vars: {},

      init: function( container ) {
        var that = this;
       //****///

        container.find( ".content").css( { opacity : 0 } );

        container.find( ".puce").css( { opacity : 0, scale: 0 } );
        container.find( ".detail").css( { opacity : 0 } ).hide();
        container.find( ".detail .close").css( { opacity : 0, scale:0, rotate:'45deg' } );
        container.find( ".detail .bloc").css( { opacity : 0 } );

        //****///

        container.find( ".puce").click(function() {
          var link = $(this).data("link");
          var detail  =  container.find( ".detail[data-link='"+link+"']");
          var bloc    =  detail.find(".bloc");
          var close   =  detail.find(".close");
          detail.stop().show().transition( { opacity : 1 }, 500, 'ease');
          close.stop().transition( { opacity : 1, scale:1, delay:300 }, 500, 'ease');
          bloc.stop().transition( { opacity : 1, delay:500 }, 500, 'ease');
        });

        container.find( ".detail").each( function(index, item) { 
          var detail = $(item);
          var bloc =  $(item).find(".bloc");
          var close =  $(item).find(".close");
          close.click( function() {
            bloc.stop().transition( { opacity : 0 }, 500, 'ease');
            close.stop().transition( { opacity : 0, scale:0 }, 500, 'ease');
            detail.transition( { opacity : 0 , delay:200 }, 500, 'ease', function() {
              detail.hide();
            });
          });
        });


      },

      show: function( container ) {
        var that = this;
        container.find( ".content" ).transition( { opacity : 1, delay:300 }, 700, 'ease');
        container.find( ".puce").each( function(index, item) { 
          var delay = 800+ index*100;
          $(item).transition( { opacity : 1, scale:1, delay:delay }, 500, 'easeOutBack', function() {
            $(this).click();  
          });
          
        });
      }

    	/*,hide:function ( container, callback ) {

    		callback();
    	}*/
     }
    return script;
});