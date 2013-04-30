/*

index.js - Used to create the dynamic elements for index.php.

Author: DAVID LETTIER
   Bio: http://www.lettier.com/

*/


// HELPER FUNCTIONS

function make_div( id, z, append_to )
{
	var x = document.createElement( "div" );
	x.id = id;
	x.style.zIndex = "" + z + "";
	x.innerHTML = "";
	append_to.appendChild( x );
	
	return x;
}

function make_img( id, src, append_to )
{
	var x = document.createElement( "img" );
	x.id = id;
	x.src = src;
	x.title = id;
	append_to.appendChild( x );
	
	return x;
}

function make_button( id, img_src, img_classname, label, append_to )
{
	var x = document.createElement( "button" );
	x.id = id;
	x.type = "button";
	
	if ( img_src != -1 )
	{
		x.innerHTML = label + "&nbsp;&nbsp;&nbsp;<img src='" + img_src + "' class='" + img_classname + "'>";
	}
	else
	{
		x.innerHTML = label;
	}
	
	append_to.appendChild( x );
	
	return x;
}

function place_div( div_instance, x, y )
{
	div_instance.style.left = x + "px";
	div_instance.style.top = y + "px";
}

function size_div( div_instance, w, h )
{
	if ( w != "auto" )
	{
		div_instance.style.width = w + "px";
	}
	else
	{
		div_instance.style.width = "auto";
	}
	
	if ( h != "auto" )
	{	
		div_instance.style.height = h + "px";
	}
	else
	{
		div_instance.style.height = "auto";
	}
}

function apply_class( obj_instance, classname )
{
	obj_instance.className = classname;
}

function create_obj( id, obj_type, append_to )
{
	var x = document.createElement( obj_type );
	
	if ( id != "" )
	{
		x.id = id;
	}
	
	append_to.appendChild( x );
	
	return x;
}

function get_obj( id )
{
	return document.getElementById( id );
}

function get_style_attribute( obj_instance, css_style )
{
	return window.getComputedStyle( obj_instance ).getPropertyValue( css_style );
}

function mouse_bottom_border( obj_instance )
{
	obj_instance.onmouseover = function() { obj_instance.style.borderBottom = "3px solid #fa3a3a"; obj_instance.style.cursor = "pointer"; };
	obj_instance.onmouseout = function() { obj_instance.style.borderBottom = "3px solid #eee"; };
}

function mouse_down_swap_classname( obj_instance, classname1, classname2 )
{
	obj_instance.onmousedown = function() { obj_instance.className = classname2; obj_instance.style.cursor = "pointer"; };
	obj_instance.onmouseup = function() { obj_instance.className = classname1;  };
}

function mouse_over_swap_classname( obj_instance, classname1, classname2 )
{
	obj_instance.onmouseover = function() { obj_instance.className = classname2; obj_instance.style.cursor = "pointer"; };
	obj_instance.onmouseout = function() { obj_instance.className = classname1;  };
}

function create_input_box( id, type, name, append_to )
{
	var x = document.createElement( "input" );
	x.id = id;
	x.type = type;
	x.name = name;
	
	append_to.appendChild( x );
	
	return x;
}

function create_option_box( id, name, options, append_to )
{
	var x = document.createElement( "select" );
	
	x.id = id;
	x.name = name;	
	
	var html_string = "";
	for( var i = 0; i < options.length ; i++ )
	{
		html_string += "<option value='" + options[i] + "'>" + options[i] + "</option>";
	}
	x.innerHTML = html_string;
	
	append_to.appendChild( x );
	
	return x;
}

function get_body_height( ) 
{
	var doc = document;
	
	var max_height =  Math.max(
        Math.max( doc.body.scrollHeight, doc.documentElement.scrollHeight ),
        Math.max( doc.body.offsetHeight, doc.documentElement.offsetHeight ),
        Math.max( doc.body.clientHeight, doc.documentElement.clientHeight )
    	);
    	
    	return max_height;    	
}

// HELPER VARS

var win_width = window.innerWidth;
var win_height = get_body_height();

// BEGIN CREATING THE HEADER OF THE PAGE

var logo_cont = make_div( "logo_cont", 1, document.body );
var main_nav_cont = make_div( "main_nav_cont", 1, document.body );
var signup_cont = make_div( "signup_cont", 1, document.body );

apply_class( logo_cont, "logo_cont" );
apply_class( main_nav_cont, "main_nav_cont" );
apply_class( signup_cont, "signup_cont" );

var logo = make_img( "logo_full", "assets/images/car_logo.png", logo_cont );

apply_class( logo, "logo_full" );

main_nav_cont.innerHTML = "<span id='home_link'>Home</span> &nbsp;&nbsp;&nbsp;&nbsp; <span id='carpools_link'>Carpools</span> &nbsp;&nbsp;&nbsp;&nbsp; <span id='how_link'>How It Works</span> &nbsp;&nbsp;&nbsp;&nbsp; <span id='about_link'>About</span> &nbsp;&nbsp;&nbsp;&nbsp; <span id='contact_link'>Contact</span>";
size_div( main_nav_cont, "672" /*win_width * .35*/, parseInt( logo.clientHeight, 10 ) );
place_div( main_nav_cont, parseInt( logo.clientWidth, 10 ) + 20, parseInt( logo.clientHeight, 10 ) - 90 );

var home_link = get_obj( "home_link" );
home_link.onmouseup = function( ) { window.location.href = "index.php"; }
var carpools_link = get_obj( "carpools_link" );
carpools_link.onmouseup = function( ) { window.location.href = "carpools.php"; }
var how_link = get_obj( "how_link" );
how_link.onmouseup = function( ) { window.location.href = "how.php"; }
var about_link = get_obj( "about_link" );
about_link.onmouseup = function( ) { window.location.href = "about.php"; }

/*

mouse_bottom_border( home_link );
mouse_bottom_border( carpools_link );
mouse_bottom_border( how_link );
mouse_bottom_border( about_link );
mouse_bottom_border( contact_link );

*/

var signup_button = make_button( "signup_button", "assets/images/arrow_icon.png", "signup_arrow_icon", "SIGNUP", signup_cont );
apply_class( signup_button, "signup_button_up" );
mouse_down_swap_classname( signup_button, "signup_button_up", "signup_button_down" );

place_div( signup_cont, parseInt( main_nav_cont.clientWidth, 10 ) + parseInt( logo.clientWidth, 10 ) + 50, parseInt( logo.clientHeight, 10 ) - 100 + 4.5 );

// END CREATING THE HEADER OF THE PAGE

// BEGIN CREATING THE BODY OF THE PAGE

var body_cont = make_div( "body_cont", 1 , document.body );
size_div( body_cont, win_width, win_height - parseInt( get_style_attribute( body_cont, "top" ) ) );
place_div( body_cont, 0, parseInt( logo.clientHeight, 10 ) - 20 );
apply_class( body_cont, "body_cont" );

var search_cont = make_div( "search_cont", 1 , body_cont );
size_div( search_cont, "326" /*win_width * .17*/ , "518" );
place_div( search_cont, 20, 30 );
apply_class( search_cont, "search_cont" );
search_cont.innerHTML = "<span class='search_text'>Search</span>";

// SEARCH CRITERIA SECTION

var br = create_obj( "", "br", search_cont );
//br = create_obj( "", "br", search_cont );

var point_a_text = create_obj( "point_a_text", "span", search_cont );
apply_class( point_a_text, "point_a_text" );
point_a_text.innerHTML = "Point A:";

br = create_obj( "", "br", search_cont );

var point_a_box = create_input_box( "point_a_box", "text", "point_a", search_cont );
apply_class( point_a_box, "point_a_box" );

br = create_obj( "", "br", search_cont );

var point_b_text = create_obj( "point_b_text", "span", search_cont );
apply_class( point_b_text, "point_b_text" );
point_b_text.innerHTML = "Point B:";

br = create_obj( "", "br", search_cont );

var point_b_box = create_input_box( "point_b_box", "text", "point_b", search_cont );
apply_class( point_b_box, "point_b_box" );

br = create_obj( "", "br", search_cont );

var depart_time_text = create_obj( "depart_time_text", "span", search_cont );
apply_class( depart_time_text, "depart_time_text" );
depart_time_text.innerHTML = "Departure Time:";

br = create_obj( "", "br", search_cont );

var options = new Array();

for( var i = 0; i < 24 ; i++ )
{
	options[i] = i + ":00";
}

var depart_options_box = create_option_box( "depart_options_box", "depart_options", options, search_cont );
apply_class( depart_options_box, "depart_options_box" );

br = create_obj( "", "br", search_cont );

var arrival_time_text = create_obj( "arrival_time_text", "span", search_cont );
apply_class( arrival_time_text, "arrival_time_text" );
arrival_time_text.innerHTML = "Arrival Time:";

br = create_obj( "", "br", search_cont );

var arrival_options_box = create_option_box( "arrival_options_box", "arrival_options", options, search_cont );
apply_class( arrival_options_box, "arrival_options_box" );

br = create_obj( "", "br", search_cont );

var vehicle_pref_text = create_obj( "vehicle_pref_text", "span", search_cont );
apply_class( vehicle_pref_text, "vehicle_pref_text" );
vehicle_pref_text.innerHTML = "Vehicle Preference:";

br = create_obj( "", "br", search_cont );

options = [ "Two Door", "Four Door", "Mini-Van", "Cargo Van", "Truck", "Motorcycle" ];

var vehicle_pref_options_box = create_option_box( "vehicle_pref_options_box", "depart_options", options, search_cont );
apply_class( vehicle_pref_options_box, "vehicle_pref_options_box" );

br = create_obj( "", "br", search_cont );

var search_button = make_button( "search_button", "assets/images/arrow_icon.png", "signup_arrow_icon", "SEARCH", search_cont );
apply_class( search_button, "search_button_up" );
mouse_down_swap_classname( search_button, "search_button_up", "search_button_down" );

search_button.onmouseup = function ( ) {
	
	console.log( point_a_box.value + " " + point_b_box.value );
	
	update_map( point_a_box.value, point_b_box.value );
	
};

br = create_obj( "", "br", search_cont );

// MAP SECTION

var map_cont = make_div( "map_cont", 3, body_cont );
size_div( map_cont, "576" /*win_width * .3*/, parseInt( search_cont.clientHeight, 10 ) + 0 );
place_div( map_cont, parseInt( get_style_attribute( search_cont, "left" ) ) + parseInt( get_style_attribute( search_cont, "width" ) ) + 30, -528 );
apply_class( map_cont, "map_cont" ); 

var map, layer;

function init_map( )
{
	MQA.EventUtil.observe(window, 'load', function() 
	{

		/*Create an object for options*/ 
		var options={
			elt:document.getElementById('map_cont'),       /*ID of element on the page where you want the map added*/ 
			zoom:13,                                  /*initial zoom level of the map*/ 
			latLng:{lat:40.735383, lng:-73.984655},   /*center of map in latitude/longitude */ 
			mtype:'osm',                              /*map type (osm)*/ 
			bestFitMargin:0,                          /*margin offset from the map viewport when applying a bestfit on shapes*/ 
			zoomOnDoubleClick:true                    /*zoom in when double-clicking on map*/ 
		};

		/*Construct an instance of MQA.TileMap with the options object*/ 
		window.map = new MQA.TileMap(options);

		MQA.withModule('largezoom','viewoptions','geolocationcontrol','insetmapcontrol','mousewheel', function() 
		{

			map.addControl(
				new MQA.LargeZoom(),
				new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5))
			);

			map.addControl(new MQA.ViewOptions());

			map.addControl(
				new MQA.GeolocationControl(),
				new MQA.MapCornerPlacement(MQA.MapCorner.TOP_RIGHT, new MQA.Size(10,50))
			);

			/*Inset Map Control options*/ 
			var options={
			size:{width:150, height:125},
			zoom:3,
			mapType:'osmsat',
			minimized:false 
			};

			map.addControl(
				new MQA.InsetMapControl(options),
				new MQA.MapCornerPlacement(MQA.MapCorner.BOTTOM_RIGHT)
			);

			map.enableMouseWheelZoom();
		});
	});
}

function update_map( loc_a, loc_b )
{
	
	map_cont = get_obj( "map_cont" );
	
	map_cont.innerHTML = "";
	
	map_handle = null;
		
	/*Arrays to hold lat/lng data for use with the Directions module*/		
		
	var latitude = new Array;
	
	var longitude = new Array;

	/*Addresses that need to be geocoded*/
	
	var locations = new Array( loc_a, loc_b );

	/*Using the Nominatim API Service to geocode the addresses in the locations array*/
	
	for ( i = 0 ; i < locations.length ; i++ ) 
	{
		$.ajax({
			url: 'http://open.mapquestapi.com/nominatim/v1/search',
			dataType: 'json',
			async: false,
			crossDomain: true,
			data: {
				q: locations[i],
				format: 'json'
			},

			success: function( data, textStatus, jqXHR ) 
			{
				/*Storing the lat/lngs in an array for later use*/
				
					latitude.push( data[0].lat );
				longitude.push( data[0].lon );

				/*Get map and create the route when done*/
				
				if( i==locations.length-1 ) 
				{
					getMap( );
				}
			}
		});
	}

	function getMap() 
	{
		/*Create an object for options*/
		
		var options = {
			elt:document.getElementById( 'map_cont' ),        /*ID of element on the page where you want the map added*/
			zoom:18,                                   /*initial zoom level of map*/
			//latLng:{lat:40.735383, lng:-73.984655},    /*center of map in latitude/longitude*/
			mtype:'osm'                                /*map type (osm)*/
		};

		/*Construct an instance of MQA.TileMap with the options object*/
		
		window.map = new MQA.TileMap(options);			
		

		/*This uses the MQA.withModule support to download and initialize the routing support modules. When the
		modules are ready for use, the function provided as the last parameter will be executed.*/
		
		MQA.withModule( 'largezoom', 'directions', function() 
		{
			
			map.addControl(
				new MQA.LargeZoom(),
				new MQA.MapCornerPlacement( MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5) )
			);
			
			/*Uses the MQA.TileMap.addRoute function (added to the TileMap with the directions module)
			passing in an array of location objects as the only parameter.*/
			map.addRoute([
				{latLng: {lat:latitude[0], lng:longitude[0]}},
				{latLng: {lat:latitude[1], lng:longitude[1]}}
			]);				
		});		
	}
}

init_map( );

// var osm_attribute = get_obj( "OpenLayers.Control.Attribution_7" ); // Hide the water mark.

// osm_attribute.style.visibility = "hidden"; // Hide the water mark.

// ACCOUNT SECTION

var account_cont = make_div( "account_cont", 1, body_cont );
size_div( account_cont, "298" /*win_width * .155*/, parseInt( search_cont.clientHeight, 10 ) + 0 );
place_div( account_cont, parseInt( get_style_attribute( map_cont, "left" ) ) + parseInt( get_style_attribute( map_cont, "width" ) ) + 30, 30 );
apply_class( account_cont, "account_cont" ); 
account_cont.innerHTML = "<span class='account_text'>Account</span><br><br>";

var account_blank_img = make_img( "account_blank_img", "assets/images/account_icon.png", account_cont );
apply_class( account_blank_img, "account_blank_img" );

br = create_obj( "", "br", account_cont );

var login_text = create_obj( "login_text", "span", account_cont );
login_text.innerHTML = "LOGIN " + "&nbsp;&nbsp;&nbsp;<img src='assets/images/arrow_icon.png' class='login_arrow_icon'>";
apply_class( login_text, "login_text" );

//mouse_over_swap_classname( login_text, "login_text", "login_text_over" );

// END CREATING THE BODY OF THE PAGE

// BEGIN SIGNUP

signup_button.onclick = function(){ signup_dialog_box_init( ); };

function signup_dialog_box_init( )
{
	var signup_dialog_cont = make_div( "signup_dialog_cont", 10, document.body );
	size_div( signup_dialog_cont, "300", "300" );
	place_div( signup_dialog_cont, window.innerWidth/2 - 150, window.innerHeight/2 - 150 );
	apply_class( signup_dialog_cont, "signup_dialog_cont" ); 
	signup_dialog_cont.innerHTML = "<span class='signup_text'>Sign-up</span><br>";
	
	var grey_out = make_div( "grey_out", 8, document.body );
	size_div( grey_out, window.innerWidth, get_body_height() );
	place_div( grey_out, 0, 0);
	apply_class( grey_out, "grey_out" ); 
	grey_out.innerHTML = "&nbsp;";
	
	br = create_obj( "", "br", signup_dialog_cont );

	var user_name_text = create_obj( "user_name_text", "span", signup_dialog_cont );
	apply_class( user_name_text, "user_name_text" );
	user_name_text.innerHTML = "Username:";

	//br = create_obj( "", "br", signup_dialog_cont );

	var user_name_box = create_input_box( "user_name_box", "text", "user_name", signup_dialog_cont );
	apply_class( user_name_box, "user_name_box" );
	user_name_box.title = "Must be a valid email address."
	
	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
	
	var pass_word_text = create_obj( "pass_word_text", "span", signup_dialog_cont );
	apply_class( pass_word_text, "pass_word_text" );
	pass_word_text.innerHTML = "Password:";
	
	//br = create_obj( "", "br", signup_dialog_cont );

	var pass_word_box = create_input_box( "pass_word_box", "password", "pass_word", signup_dialog_cont );
	apply_class( pass_word_box, "pass_word_box" );
	
	br = create_obj( "", "br", signup_dialog_cont );
	
	var pass_word_confirm_text = create_obj( "pass_word_confirm_text", "span", signup_dialog_cont );
	apply_class( pass_word_confirm_text, "pass_word_text" );
	pass_word_confirm_text.innerHTML = "Confirm:";
	
	//br = create_obj( "", "br", signup_dialog_cont );

	var pass_word_confirm_box = create_input_box( "pass_word_confirm_box", "password", "pass_word_confirm", signup_dialog_cont );
	apply_class( pass_word_confirm_box, "pass_word_box" );
	pass_word_confirm_box.title = "Enter in the same password you just typed.";
	
	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
	
	var first_name_text = create_obj( "first_name_text", "span", signup_dialog_cont );
	apply_class( first_name_text, "pass_word_text" );
	first_name_text.innerHTML = "First Name:";
	
	//br = create_obj( "", "br", signup_dialog_cont );

	var first_name_box = create_input_box( "first_name_box", "text", "first_name", signup_dialog_cont );
	apply_class( first_name_box, "pass_word_box" );
	
	br = create_obj( "", "br", signup_dialog_cont );
	
	var last_name_text = create_obj( "last_name_text", "span", signup_dialog_cont );
	apply_class( last_name_text, "pass_word_text" );
	last_name_text.innerHTML = "Last Name:";
	
	//br = create_obj( "", "br", signup_dialog_cont );

	var last_name_box = create_input_box( "last_name_box", "text", "last_name", signup_dialog_cont );
	apply_class( last_name_box, "pass_word_box" );

	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
		
	var submit_button = make_button( "submit_button", "", "", "SUBMIT", signup_dialog_cont );
	apply_class( submit_button, "submit_button_up" );
	mouse_down_swap_classname( submit_button, "submit_button_up", "submit_button_down" );
	
	var cancel_button = make_button( "cancel_button", "", "", "CANCEL", signup_dialog_cont );
	apply_class( cancel_button, "cancel_button_up" );
	mouse_down_swap_classname( cancel_button, "cancel_button_up", "cancel_button_down" );
	
	submit_button.onclick = function() { submit_signup_data( ); };
	
	cancel_button.onclick = function() { cancel_signup_form( ); };
}

function submit_signup_data( )
{

	var user_name_box         = get_obj( "user_name_box" );
	var pass_word_box         = get_obj( "pass_word_box" );
	var pass_word_confirm_box = get_obj( "pass_word_confirm_box" );
	var first_name_box        = get_obj( "first_name_box" );
	var last_name_box         = get_obj( "last_name_box" );
	
	var current_date = new Date();
	
	var last_accessed = current_date.getFullYear() + "/" + current_date.getMonth() + "/" + current_date.getDate( );
	
	var data_fields = [ user_name_box.value, first_name_box.value, last_name_box.value, last_accessed ];
	
	// VALIDATION
	
	if ( pass_word_box.value != pass_word_confirm_box.value )
	{
		window.alert( "Check that your passwords match." );
		return;
	}
	
	if ( user_name_box.value == "" || pass_word_box.value == "" || first_name_box.value == "" || last_name_box.value == "" )
	{
		window.alert( "All fields are required, thanks." );
		return;
	}
	
	// checks that an input string looks like a valid email address.
	var isEmail_re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	function isEmail ( s ) 
	{
	   return String( s ).search ( isEmail_re ) != -1;
	}

	if ( !isEmail( user_name_box.value ) )
	{
		window.alert( "Check your username. It must be a valid email address." );
		return;
	}	
	
	// AJAX CALL

	function get_XmlHttp() 
	{
		// create the variable that will contain the instance of the XMLHttpRequest object (initially with null value)
		var xmlHttp = null;

		if( window.XMLHttpRequest ) 
		{		// for Forefox, IE7+, Opera, Safari, ...
			xmlHttp = new XMLHttpRequest();
		}
		else if ( window.ActiveXObject ) 
		{	// for Internet Explorer 5 or 6
			xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
		}

		return xmlHttp;
	}

	// sends data to a php file, via POST, and displays the received answer
	function ajaxrequest( php_file, tagID ) 
	{
		var request =  get_XmlHttp( ); // call the function for the XMLHttpRequest instance

		// create pairs index=value with data that must be sent to server
		var data_string = 'user_name=' + user_name_box.value;
		data_string  += '&pass_word=' + pass_word_box.value;
		data_string  += '&first_name=' + first_name_box.value;
		data_string  += '&last_name=' + last_name_box.value;

		request.open( "POST", php_file, true ); // set the request

		// adds  a header to tell the PHP script to recognize the data as is sent via POST
		request.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
		request.send( data_string );// calls the send() method with datas as parameter

		// Check request status
		// If the response is received completely, will be transferred to the HTML tag with tagID
		request.onreadystatechange = function( ) 
		{
			if ( request.readyState == 4 )
			{
			
				signup_dialog_cont.style.height = "auto";
				
				document.getElementById( tagID ).style.visibility = "visible";
				document.getElementById( tagID ).innerHTML = request.responseText;

				
				if ( php_response.innerHTML == "Welcome!" ) // Added a user. Now to change the signup button and account column.
				{	
					var signup_cont = get_obj( "signup_cont" );
					var signup_button = get_obj( "signup_button" );
	
					signup_cont.removeChild( signup_button );
	
					var logout_button = make_button( "logout_button", "assets/images/arrow_icon.png", "signup_arrow_icon", "LOGOUT", signup_cont ); 
					apply_class( logout_button, "logout_button_up" );
					mouse_down_swap_classname( logout_button, "logout_button_up", "logout_button_down" );
					
					logout_button.onclick = function() { logout( ); };
					
					var account_cont = get_obj( "account_cont" );
					var account_blank_img = get_obj( "account_blank_img" );
					var login_text = get_obj( "login_text" );
					
					account_cont.removeChild( account_blank_img );
					account_cont.removeChild( login_text );
					
					account_cont.removeChild( account_cont.childNodes[1] );
					account_cont.removeChild( account_cont.childNodes[2] );
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[0];
					
					var br = create_obj( "", "br", account_cont );
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: " + data_fields[1];
					
					br = create_obj( "", "br", account_cont );
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: " + data_fields[2];
					
					var br = create_obj( "", "br", account_cont );
					
					var last_accessed_text = create_obj( "last_accessed_text", "span", account_cont );
					apply_class( last_accessed_text, "pass_word_text" );
					last_accessed_text.innerHTML = "Last Accessed: " + data_fields[3];					
					
					window.setTimeout( function(){ cancel_signup_form(); }, 2000 ); // Clear out the signup dialog.
				}
				else // Account already exists. Do nothing.
				{
					window.setTimeout( function(){ cancel_signup_form(); }, 2000 );
				}			
			}
		}
	}
	
	var signup_dialog_cont = get_obj( "signup_dialog_cont" );
	
	while ( signup_dialog_cont.firstChild ) 
	{
		signup_dialog_cont.removeChild( signup_dialog_cont.firstChild );
	}
	
	var php_response = create_obj( "php_response", "span", signup_dialog_cont );
	apply_class( php_response, "php_response" );
	php_response.style.visibility = "hidden";
	php_response.innerHTML = "&nbsp;";
	
	ajaxrequest( 'assets/scripts/add_user.php', 'php_response' );	
}

function cancel_signup_form( )
{
	var signup_dialog_cont = get_obj( "signup_dialog_cont" );
	
	while ( signup_dialog_cont.firstChild ) 
	{
		signup_dialog_cont.removeChild( signup_dialog_cont.firstChild );
	}
	
	document.body.removeChild( signup_dialog_cont );
	
	var grey_out = get_obj( "grey_out" );
	
	document.body.removeChild( grey_out );
}

function logout( )
{
	var signup_cont = get_obj( "signup_cont" );
	var logout_button = get_obj( "logout_button" );
	
	signup_cont.removeChild( logout_button );

	var signup_button = make_button( "signup_button", "assets/images/arrow_icon.png", "signup_arrow_icon", "SIGNUP", signup_cont );
	apply_class( signup_button, "signup_button_up" );
	mouse_down_swap_classname( signup_button, "signup_button_up", "signup_button_down" );
	
	signup_button.onclick = function(){ signup_dialog_box_init( ); };	
	
	var account_cont = get_obj( "account_cont" );
	
	while ( account_cont.firstChild ) 
	{
		account_cont.removeChild( account_cont.firstChild );
	}
	
	account_cont.innerHTML = "<span class='account_text'>Account</span><br><br>";	
	
	var account_blank_img = make_img( "account_blank_img", "assets/images/account_icon.png", account_cont );
	apply_class( account_blank_img, "account_blank_img" );

	br = create_obj( "", "br", account_cont );

	var login_text = create_obj( "login_text", "span", account_cont );
	login_text.innerHTML = "LOGIN " + "&nbsp;&nbsp;&nbsp;<img src='assets/images/arrow_icon.png' class='login_arrow_icon'>";
	apply_class( login_text, "login_text" );	
	
	login_text.onclick = function(){ login_dialog_box_init( ); };
}

// END SIGNUP

// BEGIN LOGIN 

login_text.onclick = function(){ login_dialog_box_init( ); };

function login_dialog_box_init( )
{
	
	var login_dialog_cont = make_div( "login_dialog_cont", 10, document.body );
	size_div( login_dialog_cont, "300", "200" );
	place_div( login_dialog_cont, window.innerWidth/2 - 150, window.innerHeight/2 - 150 );
	apply_class( login_dialog_cont, "signup_dialog_cont" ); 
	login_dialog_cont.innerHTML = "<span class='signup_text'>Login</span><br>";
	
	var grey_out = make_div( "grey_out", 8, document.body );
	size_div( grey_out, window.innerWidth, get_body_height() );
	place_div( grey_out, 0, 0);
	apply_class( grey_out, "grey_out" ); 
	grey_out.innerHTML = "&nbsp;";
	
	br = create_obj( "", "br", login_dialog_cont );

	var user_name_text = create_obj( "user_name_text", "span", login_dialog_cont );
	apply_class( user_name_text, "user_name_text" );
	user_name_text.innerHTML = "Username:";

	//br = create_obj( "", "br", login_dialog_cont );

	var user_name_box = create_input_box( "user_name_box", "text", "user_name", login_dialog_cont );
	apply_class( user_name_box, "user_name_box" );
	user_name_box.title = "Must be a valid email address."
	
	br = create_obj( "", "br", login_dialog_cont );
	br = create_obj( "", "br", login_dialog_cont );
	
	var pass_word_text = create_obj( "pass_word_text", "span", login_dialog_cont );
	apply_class( pass_word_text, "pass_word_text" );
	pass_word_text.innerHTML = "Password:";
	
	//br = create_obj( "", "br", login_dialog_cont );

	var pass_word_box = create_input_box( "pass_word_box", "password", "pass_word", login_dialog_cont );
	apply_class( pass_word_box, "pass_word_box" );

	br = create_obj( "", "br", login_dialog_cont );
	br = create_obj( "", "br", login_dialog_cont );
		
	var submit_button = make_button( "submit_button", "", "", "SUBMIT", login_dialog_cont );
	apply_class( submit_button, "submit_button_up" );
	mouse_down_swap_classname( submit_button, "submit_button_up", "submit_button_down" );
	
	var cancel_button = make_button( "cancel_button", "", "", "CANCEL", login_dialog_cont );
	apply_class( cancel_button, "cancel_button_up" );
	mouse_down_swap_classname( cancel_button, "cancel_button_up", "cancel_button_down" );
	
	submit_button.onclick = function() { submit_login_data( ); };
	
	cancel_button.onclick = function() { cancel_login_form( ); };
}

function submit_login_data( )
{

	var user_name_box = get_obj( "user_name_box" );
	var pass_word_box = get_obj( "pass_word_box" );
	
	var current_date = new Date();
	
	var last_accessed = current_date.getFullYear() + "/" + current_date.getMonth() + "/" + current_date.getDate( );
	
	// VALIDATION
	
	if ( user_name_box.value == "" || pass_word_box.value == "" )
	{
		window.alert( "All fields are required, thanks." );
		return;
	}
	
	// checks that an input string looks like a valid email address.
	
	var isEmail_re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	
	function isEmail ( s ) 
	{
	   return String( s ).search ( isEmail_re ) != -1;
	}

	if ( !isEmail( user_name_box.value ) )
	{
		window.alert( "Check your username. It must be a valid email address." );
		return;
	}	
	
	// AJAX CALL

	function get_XmlHttp() 
	{
		// create the variable that will contain the instance of the XMLHttpRequest object (initially with null value)
		var xmlHttp = null;

		if( window.XMLHttpRequest ) 
		{		// for Forefox, IE7+, Opera, Safari, ...
			xmlHttp = new XMLHttpRequest();
		}
		else if ( window.ActiveXObject ) 
		{	// for Internet Explorer 5 or 6
			xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
		}

		return xmlHttp;
	}

	// sends data to a php file, via POST, and displays the received answer
	function ajaxrequest( php_file, tagID ) 
	{
		var request =  get_XmlHttp( ); // call the function for the XMLHttpRequest instance

		// create pairs index=value with data that must be sent to server
		var data_string = 'user_name=' + user_name_box.value;
		data_string  += '&pass_word=' + pass_word_box.value;

		request.open( "POST", php_file, true ); // set the request

		// adds  a header to tell the PHP script to recognize the data as is sent via POST
		request.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
		request.send( data_string );// calls the send() method with datas as parameter

		// Check request status
		// If the response is received completely, will be transferred to the HTML tag with tagID
		request.onreadystatechange = function( ) 
		{
			if ( request.readyState == 4 )
			{
			
				data_fields = request.responseText.split( ";" );
			
				login_dialog_cont.style.height = "auto";
				
				document.getElementById( tagID ).style.visibility = "visible";
				document.getElementById( tagID ).innerHTML = data_fields[0];
				
				if ( data_fields[0] == "Welcome back!" ) // Added a user. Now to change the signup button and account column.
				{	
					var signup_cont = get_obj( "signup_cont" );
					var signup_button = get_obj( "signup_button" );
	
					signup_cont.removeChild( signup_button );
	
					var logout_button = make_button( "logout_button", "assets/images/arrow_icon.png", "signup_arrow_icon", "LOGOUT", signup_cont ); 
					apply_class( logout_button, "logout_button_up" );
					mouse_down_swap_classname( logout_button, "logout_button_up", "logout_button_down" );
					
					logout_button.onclick = function() { logout( ); };
					
					var account_cont = get_obj( "account_cont" );
					var account_blank_img = get_obj( "account_blank_img" );
					var login_text = get_obj( "login_text" );
					
					account_cont.removeChild( account_blank_img );
					account_cont.removeChild( login_text );
					
					account_cont.removeChild( account_cont.childNodes[1] );
					account_cont.removeChild( account_cont.childNodes[2] );
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[1];
					
					var br = create_obj( "", "br", account_cont );
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: " + data_fields[2];
					
					br = create_obj( "", "br", account_cont );
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: " + data_fields[3];
					
					var br = create_obj( "", "br", account_cont );
					
					var last_accessed_text = create_obj( "last_accessed_text", "span", account_cont );
					apply_class( last_accessed_text, "pass_word_text" );
					last_accessed_text.innerHTML = "Last Accessed: " + data_fields[4];					
					
					window.setTimeout( function(){ cancel_login_form(); }, 2000 ); // Clear out the login dialog.
				}
				else // Account does not exist.
				{
					window.setTimeout( function(){ cancel_login_form(); }, 2000 );
				}			
			}
		}
	}
	
	var login_dialog_cont = get_obj( "login_dialog_cont" );
	
	while ( login_dialog_cont.firstChild ) 
	{
		login_dialog_cont.removeChild( login_dialog_cont.firstChild );
	}
	
	var php_response = create_obj( "php_response", "span", login_dialog_cont );
	apply_class( php_response, "php_response" );
	php_response.style.visibility = "hidden";
	php_response.innerHTML = "&nbsp;";
	
	ajaxrequest( 'assets/scripts/login_user.php', 'php_response' );	
}

function cancel_login_form( )
{
	var login_dialog_cont = get_obj( "login_dialog_cont" );
	
	while ( login_dialog_cont.firstChild ) 
	{
		login_dialog_cont.removeChild( login_dialog_cont.firstChild );
	}
	
	document.body.removeChild( login_dialog_cont );
	
	var grey_out = get_obj( "grey_out" );
	
	document.body.removeChild( grey_out );
}

// END LOGIN 

// BEGIN RESPONSIVE SIZING

window.setInterval( resize, 1000 );

function resize( )
{
	var win_width = window.innerWidth;
	var win_height = get_body_height();
	
	size_div( body_cont, win_width, win_height - parseInt( get_style_attribute( body_cont, "top" ) ) );	
}









