define(['jquery', 'Backbone','underscore','transit'], function( $, Backbone, _ ) {
    
    script = {

        container: null,

    	init: function ( container) {
            console.log("[ HOME ] init()")
            if( app.currentPage != null ) container.css( { "opacity" : "0" } );
            container.find( "h1" ).css( { opacity : 0, y: 20 } );
            container.find( "img.logo" ).css( { opacity : 0 } );
            container.find( ".path" ).css( { opacity : 0, y: 30 } );
            container.find( ".disc" ).css({ opacity : 0, scale: .8, rotate: '-75deg' });
            container.find( ".picture" ).css( { opacity : 0, scale: .8  } );

            
            var list = ["range","oridermyl","aurizon"/*,"sonotix"*/,"clindaseptin","cefaseptin","clavaseptin","marbocyl"];
            list.forEach( function( item ) {
                container.find( "."+item+" .bigdot" ).click( function(e){
                    window.location.hash = item.toUpperCase(); 
                });
            })
    	},

    	show: function ( container) {
            console.log("[ HOME ] show()")
    		this.container = container;

            container.find( "h1" ).transition( { opacity : 1, y:0, delay:300 }, 700, 'ease');

            container.find( ".disc" ).transition( { opacity: 1, scale:1, rotate: 0, delay:600 }, 1000, 'easeOutBack');
            container.find( ".picture" ).transition( { opacity: 1, scale:1, delay:600 }, 1000, 'easeOutBack');
            
            container.find( ".bigDot_pink" ).transition( { opacity : 1, scale:1, delay:2400}, 500, 'snap');
            container.find( ".bigDot_green").transition( { opacity : 1, scale:1, delay:2600}, 500, 'snap');
            container.find( ".bigDot_blue" ).transition( { opacity : 1, scale:1, delay:2800}, 500, 'snap');
            
            container.find( ".path.range"       ).transition( {  "opacity" : 1, y:0, delay:2000}, 1000, 'ease');
            container.find( ".path.oridermyl"   ).transition( {  "opacity" : 1, y:0, delay:2100}, 1000, 'ease');
            container.find( ".path.aurizon"     ).transition( {  "opacity" : 1, y:0, delay:2200}, 1000, 'ease');
            container.find( ".path.sonotix"     ).transition( {  "opacity" : 1, y:0, delay:2300}, 1000, 'ease');
            container.find( ".path.clindaseptin").transition( {  "opacity" : 1, y:0, delay:2400}, 1000, 'ease');
            container.find( ".path.cefaseptin"  ).transition( {  "opacity" : 1, y:0, delay:2500}, 1000, 'ease');
            container.find( ".path.clavaseptin" ).transition( {  "opacity" : 1, y:0, delay:2600}, 1000, 'ease');            
            container.find( ".path.marbocyl"    ).transition( {  "opacity" : 1, y:0, delay:2700}, 1000, 'ease');
           
            
            

		    container.find( "img.logo" ).transition( { "opacity" : 1, delay: 500 }, 800);
		    if( app.currentPage != null ) container.transition( { "opacity" : "1" }, 500 );
		}

    	
     }

    return script;
});