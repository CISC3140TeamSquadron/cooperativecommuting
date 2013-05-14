/*

contact.js - Used to create the dynamic elements for contact.php.

Authors: DAVID LETTIER
		 DRAISY SABEL 
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
			if (type == "textarea"){
			x.rows = "300";
			x.cols = "100";
			}
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

//var home_link = get_obj( "home_link" );
//home_link.onmouseup = function( ) { window.location.href = "index.php"; }

//var contact_link = get_obj( "contact_link" );
//contact_link.onmouseup = function( ) { window.location.href = "contact.php"; }

var home_link = get_obj( "home_link" );
home_link.onmouseup = function( ) { window.location.href = "index.php"; }
var carpools_link = get_obj( "carpools_link" );
carpools_link.onmouseup = function( ) { window.location.href = "carpools.php"; }
var how_link = get_obj( "how_link" );
how_link.onmouseup = function( ) { window.location.href = "how.php"; }
var about_link = get_obj( "about_link" );
about_link.onmouseup = function( ) { window.location.href = "about.php"; }
var contact_link = get_obj( "contact_link" );
contact_link.onmouseup = function( ) { window.location.href = "contact.php"; }

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

var sidebar_cont = make_div( "sidebar_cont", 1 , body_cont );
size_div( sidebar_cont, "326" /*win_width * .17*/ , "518" );
place_div( sidebar_cont, 20, 30 );
apply_class( sidebar_cont, "sidebar_cont");

var sidebar_cont_img = make_img( "road_img", "assets/images/road_img.png", sidebar_cont );
apply_class( sidebar_cont_img, "road_img" );

//BEGIN CONTACT CONTAINER

var contact_cont = make_div( "contact_cont", 3, body_cont );
size_div( contact_cont, "576" /*win_width * .3*/, parseInt( sidebar_cont.clientHeight, 10 ) + 0 );
place_div( contact_cont, parseInt( get_style_attribute( sidebar_cont, "left" ) ) + parseInt( get_style_attribute( sidebar_cont, "width" ) ) + 30, 30 );
apply_class( contact_cont, "signup_dialog_cont"); 
contact_cont.innerHTML = "<span class='signup_text'>Contact Us</span>";

	br = create_obj( "", "br", contact_cont );
	br = create_obj( "", "br", contact_cont );

	var fname_text = create_obj( "fname_text", "span", contact_cont );
	apply_class( fname_text, "pass_word_text" );
	fname_text.innerHTML = "First Name:";

	var fname_box = create_input_box( "fname_box", "text", "fname", contact_cont );
	apply_class( fname_box, "pass_word_box" );
	
	br = create_obj( "", "br", contact_cont );
	br = create_obj( "", "br", contact_cont );
	
	var lname_text = create_obj( "lname_text", "span", contact_cont );
	apply_class( lname_text, "pass_word_text" );
	lname_text.innerHTML = "Last Name:";

	var lname_box = create_input_box( "lname_box", "text", "lname", contact_cont );
	apply_class( lname_box, "pass_word_box" );

	br = create_obj( "", "br", contact_cont );
	br = create_obj( "", "br", contact_cont );
	
	var email_add_text = create_obj("email_add_text", "span", contact_cont);
	apply_class(email_add_text, "pass_word_text");
	email_add_text.innerHTML = "Email:";
	
	var email_add_box = create_input_box( "email_add_box", "text", "email_add", contact_cont );
	apply_class(email_add_box, "pass_word_box");
	
	br = create_obj( "", "br", contact_cont );
	br = create_obj( "", "br", contact_cont );
	
	var message_text = create_obj("message_text", "span", contact_cont);
	apply_class(message_text, "pass_word_text");
	message_text.innerHTML = "Message:";
	
	br = create_obj( "", "br", contact_cont );
	
	var message_box = create_input_box( "message_box", "textarea", "message", contact_cont );
	apply_class(message_box, "textarea");
	br = create_obj( "", "br", contact_cont );
	br = create_obj( "", "br", contact_cont );

	var submit_form_button = make_button( "submit_form_button", "", "", "SUBMIT", contact_cont );
	apply_class( submit_form_button, "submit_button_up" );
	mouse_down_swap_classname( submit_form_button, "submit_button_up", "submit_button_down" );
	
	var reset_button = make_button( "reset_button", "", "", "RESET", contact_cont );
	apply_class( reset_button, "cancel_button_up" );
	mouse_down_swap_classname( reset_button, "cancel_button_up", "cancel_button_down" );
	
	submit_form_button.onclick = function() { submit_form_data( ); };
	reset_button.onclick = function() { cancel_contact_form( ); };


function submit_form_data( )
{	
	var email_add_box         = get_obj( "email_add_box" );
	var fname_box       	  = get_obj( "fname_box" );
	var lname_box 			  = get_obj( "lname_box" );
	var message_box           = get_obj( "message_box" );
	
	var data_fields = [ fname_box.value, lname_box.value, email_add_box.value, message_box.value];

	if ( email_add_box.value == "" || fname_box.value == "" || lname_box.value == "" || message_box.value == "" )
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

	if ( !isEmail( email_add_box.value ) )
	{
		window.alert( "You must use a valid email address." );
		return;
	}	
	
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
		var data_string = 'fname=' + fname_box.value;
		data_string  += '&lname=' + lname_box.value;
		data_string  += '&email_add' + email_add_box.value;
		data_string  += '&message=' + message_box.value;
			

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
			
				contact_cont.style.height = "auto";
				
				document.getElementById( tagID ).style.visibility = "visible";
				document.getElementById( tagID ).innerHTML = request.responseText;

				
				if ( php_response_sent.innerHTML == "Message Sent!" ) // Message sent successfully. Clear fields.
				
					window.setTimeout( function(){ cancel_contact_form(); }, 2000 ); // Clear out the contact form.
				}
				else
				{
					window.setTimeout( function(){ cancel_contact_form(); }, 2000 );
				}
			}
	
}		
	
	var php_response_sent = create_obj( "php_response_sent", "span", contact_cont );
	apply_class( php_response_sent, "php_response" );
	php_response_sent.style.visibility = "hidden";
	php_response_sent.innerHTML = "&nbsp;";
	
	ajaxrequest( 'assets/scripts/contact_form.php', 'php_response_sent' );
}

function cancel_contact_form( )  //clearing contact form and confirmation message
{
	var contact_cont = get_obj( "contact_cont" );
	var email_add_box         = get_obj( "email_add_box" );
	var fname_box       	  = get_obj( "fname_box" );
	var lname_box 			  = get_obj( "lname_box" );
	var message_box           = get_obj( "message_box" );
	
	email_add_box.value = "";
	fname_box.value = ""; 
	lname_box.value = "";
	message_box.value = "";
	
	var php_response_sent = get_obj( "php_response_sent" );
	php_response_sent.style.visibility = "hidden";

	
}

	//END CONTACT CONTAINER
	
	//BEGIN ACCOUNT CONTAINER SECTION

var account_cont = make_div( "account_cont", 1, body_cont );
size_div( account_cont, "298" /*win_width * .155*/, parseInt( sidebar_cont.clientHeight, 10 ) + 0 );
place_div( account_cont, parseInt( get_style_attribute( contact_cont, "left" ) ) + parseInt( get_style_attribute( contact_cont, "width" ) ) + 30, 30 );
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
	size_div( signup_dialog_cont, "300", "630" );
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
	
	//br = create_obj( "","br", signup_dialog_cont );

	var last_name_box = create_input_box( "last_name_box", "text", "last_name", signup_dialog_cont );
	apply_class( last_name_box, "pass_word_box" );

	br = create_obj( "", "br", signup_dialog_cont );
	var email_text = create_obj("email_text", "span", signup_dialog_cont);
	apply_class(email_text, "pass_word_text");
	email_text.innerHTML = "Email:";
	
	var email_box = create_input_box( "email_box", "text", "email", signup_dialog_cont );
	apply_class(email_box, "pass_word_box");
	
	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
	
	var driver_text = create_obj("driver_text", "span", signup_dialog_cont);
	apply_class(driver_text, "pass_word_text");
	driver_text.innerHTML = "Driver?";
		
	var driver_box = create_input_box( "driver_box", "text", "driver", signup_dialog_cont );
	apply_class(driver_box, "pass_word_box");
	
	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
	
	var address_text = create_obj("address_text", "span", signup_dialog_cont);
	apply_class(address_text, "pass_word_text");
	address_text.innerHTML = "Street Address:";
		
	var address_box = create_input_box( "address_box", "text", "address", signup_dialog_cont );
	apply_class(address_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	
	var address2_text = create_obj("address2_text", "span", signup_dialog_cont);
	apply_class(address2_text, "pass_word_text");
	address2_text.innerHTML = "Apt:";
		
	var address2_box = create_input_box( "address2_box", "text", "address2", signup_dialog_cont );
	apply_class(address2_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	
	var city_text = create_obj("city_text", "span", signup_dialog_cont);
	apply_class(city_text, "pass_word_text");
	city_text.innerHTML = "City:";
		
	var city_box = create_input_box( "city_box", "text", "city", signup_dialog_cont );
	apply_class(city_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	
	var state_text = create_obj("state_text", "span", signup_dialog_cont);
	apply_class(state_text, "pass_word_text");
	state_text.innerHTML = "State:";
		
	var state_box = create_input_box( "state_box", "text", "state", signup_dialog_cont );
	apply_class(state_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	
	var zip_text = create_obj("zip_text", "span", signup_dialog_cont);
	apply_class(zip_text, "pass_word_text");
	zip_text.innerHTML = "Zip Code:";
		
	var zip_box = create_input_box( "zip_box", "text", "zip", signup_dialog_cont );
	apply_class(zip_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	
	var country_text = create_obj("country_text", "span", signup_dialog_cont);
	apply_class(country_text, "pass_word_text");
	country_text.innerHTML = "Country:";
		
	var country_box = create_input_box( "country_box", "text", "country", signup_dialog_cont );
	apply_class(country_box, "pass_word_box");
	br = create_obj( "", "br", signup_dialog_cont );
	br = create_obj( "", "br", signup_dialog_cont );
	
	var need_text = create_obj("need_text", "span", signup_dialog_cont);
	apply_class(need_text, "pass_word_text");
	need_text.innerHTML = "Need Commuting For:";
		
	var need_box = create_input_box( "need_box", "text", "need", signup_dialog_cont );
	apply_class(need_box, "pass_word_box");
	
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
	var email_box 			 = get_obj("email_box");
	var driver_box 	       = get_obj("driver_box");
	var address_box 		  = get_obj("address_box");
	var address2_box 		  = get_obj("address2_box");
	var city_box 			  = get_obj("city_box");
	var state_box 			  = get_obj("state_box");
	var zip_box 			  = get_obj("zip_box");
	var country_box 		  = get_obj("country_box");
	var need_box 			  = get_obj("need_box");
	
	var current_date = new Date();
	
	var last_accessed = current_date.getFullYear() + "/" + current_date.getMonth() + "/" + current_date.getDate( );
	
	var data_fields = [ user_name_box.value, first_name_box.value, last_name_box.value, email_box.value, driver_box.value, address_box.value, address2_box.value, city_box.value, state_box.value, zip_box.value, country_box.value, need_box.value, last_accessed ];
	
	// VALIDATION
	
	if ( pass_word_box.value != pass_word_confirm_box.value )
	{
		window.alert( "Check that your passwords match." );
		return;
	}
	
	if ( user_name_box.value == "" || pass_word_box.value == "" || first_name_box.value == "" || last_name_box.value == "" || email_box.value == "" || driver_box.value == "" || address_box.value == "" || address2_box.value == "" || city_box.value == "" || state_box.value == "" || zip_box.value == "" || country_box.value == "" )
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
	
	if ( !isEmail( email_box.value ) )
	{
		window.alert( "Is that a valid email address?" );
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
		data_string  += '&email=' + email_box.value;
		data_string  += '&driver=' + driver_box.value;
		data_string  += '&address=' + address_box.value;
		data_string  += '&address2=' + address2_box.value;
		data_string  += '&city=' + city_box.value;
		data_string  += '&state=' + state_box.value;
		data_string  += '&zip=' + zip_box.value;
		data_string  += '&country=' + country_box.value;
		data_string  += '&need=' + need_box.value;
		

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
				
				signup_dialog_cont.style.height = "auto";
				
				document.getElementById( tagID ).style.visibility = "visible";
				document.getElementById( tagID ).innerHTML = data_fields[0];

				
				if ( data_fields[0] == "Welcome!" ) // Added a user. Now to change the signup button and account column.
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
					
					account_cont.style.height = ( parseInt( account_cont.style.height.replace( "px", "" ) ) + 100 ) + "px";
					
					/*
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[1];
					
					*/
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[1];
					
					var user_name_text_box = create_input_box( "user_name_text_box", "hidden", "user_name", account_cont );
					apply_class( user_name_text_box, "account_text_box" );
					user_name_text_box.value = data_fields[1];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: " + data_fields[2];
					
					*/
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: ";
					
					var first_name_text_box = create_input_box( "first_name_text_box", "text", "first_name", account_cont );
					apply_class( first_name_text_box, "account_text_box" );
					first_name_text_box.value = data_fields[2];
					
					br = create_obj( "", "br", account_cont );
					
					/*
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: " + data_fields[3];
					
					*/
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: ";
					
					var last_name_text_box = create_input_box( "last_name_text_box", "text", "last_name", account_cont );
					apply_class( last_name_text_box, "account_text_box" );
					last_name_text_box.value = data_fields[3];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var email_text = create_obj( "email_text", "span", account_cont );
					apply_class( email_text, "pass_word_text" );
					email_text.innerHTML = "Email: " + data_fields[1];
					
					*/
					
					var email_text = create_obj( "email_text", "span", account_cont );
					apply_class( email_text, "pass_word_text" );
					email_text.innerHTML = "Email: " + data_fields[1];
					
					var email_text_box = create_input_box( "email_text_box", "hidden", "email_name", account_cont );
					apply_class( email_text_box, "account_text_box" );
					email_text_box.value = data_fields[1];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var driver_text = create_obj( "driver_text", "span", account_cont );
					apply_class( driver_text, "pass_word_text" );
					driver_text.innerHTML = "Driver:" + data_fields[4];
					
					*/
					
					var driver_text = create_obj( "driver_text", "span", account_cont );
					apply_class( driver_text, "pass_word_text" );
					driver_text.innerHTML = "Driver: ";
					
					var driver_text_box = create_input_box( "driver_text_box", "text", "driver", account_cont );
					apply_class( driver_text_box, "account_text_box" );
					driver_text_box.value = data_fields[4];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var address_text = create_obj( "address_text", "span", account_cont );
					apply_class( address_text, "pass_word_text" );
					address_text.innerHTML = "Address: " + data_fields[5];
					
					*/
					
					var address_text = create_obj( "address_text", "span", account_cont );
					apply_class( address_text, "pass_word_text" );
					address_text.innerHTML = "Address: ";
					
					var address_text_box = create_input_box( "address_text_box", "text", "address", account_cont );
					apply_class( address_text_box, "account_text_box" );
					address_text_box.value = data_fields[5];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var address2_text = create_obj( "address2_text", "span", account_cont );
					apply_class( address2_text, "pass_word_text" );
					address2_text.innerHTML = "Apt: " + data_fields[6];
					
					*/
					
					var address2_text = create_obj( "address2_text", "span", account_cont );
					apply_class( address2_text, "pass_word_text" );
					address2_text.innerHTML = "Apt: ";
					
					var address2_text_box = create_input_box( "address2_text_box", "text", "address2", account_cont );
					apply_class( address2_text_box, "account_text_box" );
					address2_text_box.value = data_fields[6];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var city_text = create_obj( "city_text", "span", account_cont );
					apply_class( city_text, "pass_word_text" );
					city_text.innerHTML = "City: " + data_fields[7];
					
					*/
					
					var city_text = create_obj( "city_text", "span", account_cont );
					apply_class( city_text, "pass_word_text" );
					city_text.innerHTML = "City: ";
					
					var city_text_box = create_input_box( "city_text_box", "text", "city", account_cont );
					apply_class( city_text_box, "account_text_box" );
					city_text_box.value = data_fields[7];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var state_text = create_obj( "state_text", "span", account_cont );
					apply_class( state_text, "pass_word_text" );
					state_text.innerHTML = "State: " + data_fields[8];
					
					*/
					
					var state_text = create_obj( "state_text", "span", account_cont );
					apply_class( state_text, "pass_word_text" );
					state_text.innerHTML = "State: ";
					
					var state_text_box = create_input_box( "state_text_box", "text", "state", account_cont );
					apply_class( state_text_box, "account_text_box" );
					state_text_box.value = data_fields[8];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var zip_text = create_obj( "zip_text", "span", account_cont );
					apply_class( zip_text, "pass_word_text" );
					zip_text.innerHTML = "Zip Code: " + data_fields[9];
					
					*/
					
					var zip_text = create_obj( "zip_text", "span", account_cont );
					apply_class( zip_text, "pass_word_text" );
					zip_text.innerHTML = "Zip: ";
					
					var zip_text_box = create_input_box( "zip_text_box", "text", "zip", account_cont );
					apply_class( zip_text_box, "account_text_box" );
					zip_text_box.value = data_fields[9];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var country_text = create_obj( "country_text", "span", account_cont );
					apply_class( country_text, "pass_word_text" );
					country_text.innerHTML = "Country: " + data_fields[10];
					
					*/
					
					var country_text = create_obj( "country_text", "span", account_cont );
					apply_class( country_text, "pass_word_text" );
					country_text.innerHTML = "Country: ";
					
					var country_text_box = create_input_box( "country_text_box", "text", "country", account_cont );
					apply_class( country_text_box, "account_text_box" );
					country_text_box.value = data_fields[10];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var need_text = create_obj( "need_text", "span", account_cont );
					apply_class( need_text, "pass_word_text" );
					need_text.innerHTML = "Need Commuting For: " + data_fields[11];
					
					*/
					
					var need_text = create_obj( "need_text", "span", account_cont );
					apply_class( need_text, "pass_word_text" );
					need_text.innerHTML = "Need Commmuting For: ";
					
					var need_text_box = create_input_box( "need_text_box", "text", "need", account_cont );
					apply_class( need_text_box, "account_text_box" );
					need_text_box.value = data_fields[11];
					
					var br = create_obj( "", "br", account_cont );
					
					var last_accessed_text = create_obj( "last_accessed_text", "span", account_cont );
					apply_class( last_accessed_text, "pass_word_text" );
					//last_accessed_text.innerHTML = "Last Accessed: " + data_fields[12];
					last_accessed_text.innerHTML = "Last Accessed: " + last_accessed;
					
					br = create_obj( "", "br", account_cont );

					var update_text = create_obj( "update_text", "span", account_cont );
					update_text.innerHTML = "UPDATE " + "&nbsp;&nbsp;&nbsp;<img src='assets/images/arrow_icon.png' class='update_arrow_icon'>";
					apply_class( update_text, "update_text" );	
					
					update_text.onclick = function(){ update_user_account( ); };					
					
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

	account_cont.style.height = ( parseInt( account_cont.style.height.replace( "px", "" ) ) - 100 ) + "px";
	
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
					
					account_cont.style.height = ( parseInt( account_cont.style.height.replace( "px", "" ) ) + 100 ) + "px";
					
					/*
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[1];
					
					*/
					
					var user_name_text = create_obj( "user_name_text", "span", account_cont );
					apply_class( user_name_text, "pass_word_text" );
					user_name_text.innerHTML = "Username: " + data_fields[1];
					
					var user_name_text_box = create_input_box( "user_name_text_box", "hidden", "user_name", account_cont );
					apply_class( user_name_text_box, "account_text_box" );
					user_name_text_box.value = data_fields[1];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: " + data_fields[2];
					
					*/
					
					var first_name_text = create_obj( "first_name_text", "span", account_cont );
					apply_class( first_name_text, "pass_word_text" );
					first_name_text.innerHTML = "First Name: ";
					
					var first_name_text_box = create_input_box( "first_name_text_box", "text", "first_name", account_cont );
					apply_class( first_name_text_box, "account_text_box" );
					first_name_text_box.value = data_fields[2];
					
					br = create_obj( "", "br", account_cont );
					
					/*
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: " + data_fields[3];
					
					*/
					
					var last_name_text = create_obj( "last_name_text", "span", account_cont );
					apply_class( last_name_text, "pass_word_text" );
					last_name_text.innerHTML = "Last Name: ";
					
					var last_name_text_box = create_input_box( "last_name_text_box", "text", "last_name", account_cont );
					apply_class( last_name_text_box, "account_text_box" );
					last_name_text_box.value = data_fields[3];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var email_text = create_obj( "email_text", "span", account_cont );
					apply_class( email_text, "pass_word_text" );
					email_text.innerHTML = "Email: " + data_fields[1];
					
					*/
					
					var email_text = create_obj( "email_text", "span", account_cont );
					apply_class( email_text, "pass_word_text" );
					email_text.innerHTML = "Email: " + data_fields[1];
					
					var email_text_box = create_input_box( "email_text_box", "hidden", "email_name", account_cont );
					apply_class( email_text_box, "account_text_box" );
					email_text_box.value = data_fields[1];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var driver_text = create_obj( "driver_text", "span", account_cont );
					apply_class( driver_text, "pass_word_text" );
					driver_text.innerHTML = "Driver:" + data_fields[4];
					
					*/
					
					var driver_text = create_obj( "driver_text", "span", account_cont );
					apply_class( driver_text, "pass_word_text" );
					driver_text.innerHTML = "Driver: ";
					
					var driver_text_box = create_input_box( "driver_text_box", "text", "driver", account_cont );
					apply_class( driver_text_box, "account_text_box" );
					driver_text_box.value = data_fields[4];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var address_text = create_obj( "address_text", "span", account_cont );
					apply_class( address_text, "pass_word_text" );
					address_text.innerHTML = "Address: " + data_fields[5];
					
					*/
					
					var address_text = create_obj( "address_text", "span", account_cont );
					apply_class( address_text, "pass_word_text" );
					address_text.innerHTML = "Address: ";
					
					var address_text_box = create_input_box( "address_text_box", "text", "address", account_cont );
					apply_class( address_text_box, "account_text_box" );
					address_text_box.value = data_fields[5];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var address2_text = create_obj( "address2_text", "span", account_cont );
					apply_class( address2_text, "pass_word_text" );
					address2_text.innerHTML = "Apt: " + data_fields[6];
					
					*/
					
					var address2_text = create_obj( "address2_text", "span", account_cont );
					apply_class( address2_text, "pass_word_text" );
					address2_text.innerHTML = "Apt: ";
					
					var address2_text_box = create_input_box( "address2_text_box", "text", "address2", account_cont );
					apply_class( address2_text_box, "account_text_box" );
					address2_text_box.value = data_fields[6];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var city_text = create_obj( "city_text", "span", account_cont );
					apply_class( city_text, "pass_word_text" );
					city_text.innerHTML = "City: " + data_fields[7];
					
					*/
					
					var city_text = create_obj( "city_text", "span", account_cont );
					apply_class( city_text, "pass_word_text" );
					city_text.innerHTML = "City: ";
					
					var city_text_box = create_input_box( "city_text_box", "text", "city", account_cont );
					apply_class( city_text_box, "account_text_box" );
					city_text_box.value = data_fields[7];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var state_text = create_obj( "state_text", "span", account_cont );
					apply_class( state_text, "pass_word_text" );
					state_text.innerHTML = "State: " + data_fields[8];
					
					*/
					
					var state_text = create_obj( "state_text", "span", account_cont );
					apply_class( state_text, "pass_word_text" );
					state_text.innerHTML = "State: ";
					
					var state_text_box = create_input_box( "state_text_box", "text", "state", account_cont );
					apply_class( state_text_box, "account_text_box" );
					state_text_box.value = data_fields[8];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var zip_text = create_obj( "zip_text", "span", account_cont );
					apply_class( zip_text, "pass_word_text" );
					zip_text.innerHTML = "Zip Code: " + data_fields[9];
					
					*/
					
					var zip_text = create_obj( "zip_text", "span", account_cont );
					apply_class( zip_text, "pass_word_text" );
					zip_text.innerHTML = "Zip: ";
					
					var zip_text_box = create_input_box( "zip_text_box", "text", "zip", account_cont );
					apply_class( zip_text_box, "account_text_box" );
					zip_text_box.value = data_fields[9];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var country_text = create_obj( "country_text", "span", account_cont );
					apply_class( country_text, "pass_word_text" );
					country_text.innerHTML = "Country: " + data_fields[10];
					
					*/
					
					var country_text = create_obj( "country_text", "span", account_cont );
					apply_class( country_text, "pass_word_text" );
					country_text.innerHTML = "Country: ";
					
					var country_text_box = create_input_box( "country_text_box", "text", "country", account_cont );
					apply_class( country_text_box, "account_text_box" );
					country_text_box.value = data_fields[10];
					
					var br = create_obj( "", "br", account_cont );
					
					/*
					
					var need_text = create_obj( "need_text", "span", account_cont );
					apply_class( need_text, "pass_word_text" );
					need_text.innerHTML = "Need Commuting For: " + data_fields[11];
					
					*/
					
					var need_text = create_obj( "need_text", "span", account_cont );
					apply_class( need_text, "pass_word_text" );
					need_text.innerHTML = "Need Commmuting For: ";
					
					var need_text_box = create_input_box( "need_text_box", "text", "need", account_cont );
					apply_class( need_text_box, "account_text_box" );
					need_text_box.value = data_fields[11];
					
					var br = create_obj( "", "br", account_cont );
					
					var last_accessed_text = create_obj( "last_accessed_text", "span", account_cont );
					apply_class( last_accessed_text, "pass_word_text" );
					//last_accessed_text.innerHTML = "Last Accessed: " + data_fields[12];
					last_accessed_text.innerHTML = "Last Accessed: " + last_accessed;
					
					br = create_obj( "", "br", account_cont );

					var update_text = create_obj( "update_text", "span", account_cont );
					update_text.innerHTML = "UPDATE " + "&nbsp;&nbsp;&nbsp;<img src='assets/images/arrow_icon.png' class='update_arrow_icon'>";
					apply_class( update_text, "update_text" );	
					
					update_text.onclick = function(){ update_user_account( ); };
					
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

function update_user_account( )
{
	var user_name_text_box = get_obj( "user_name_text_box" );
	var first_name_text_box = get_obj( "first_name_text_box" );
	var last_name_text_box = get_obj( "last_name_text_box" );
	var driver_text_box = get_obj( "driver_text_box" );
	var address_text_box = get_obj( "address_text_box" );
	var address2_text_box = get_obj( "address2_text_box" );
	var city_text_box = get_obj( "city_text_box" );
	var state_text_box = get_obj( "state_text_box" );
	var zip_text_box = get_obj( "zip_text_box" );
	var country_text_box = get_obj( "country_text_box" );
	var need_text_box = get_obj( "need_text_box" );
	
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
		var data_string = 'user_name='  + user_name_text_box.value;
		data_string  += '&first_name='   + first_name_text_box.value;
		data_string  += '&last_name='   + last_name_text_box.value;
		data_string  += '&driver='      + driver_text_box.value;
		data_string  += '&address='     + address_text_box.value;
		data_string  += '&address2='    + address2_text_box.value;
		data_string  += '&city='        + city_text_box.value;
		data_string  += '&state='       + state_text_box.value;
		data_string  += '&zip='         + zip_text_box.value;
		data_string  += '&country='     + country_text_box.value;
		data_string  += '&need='        + need_text_box.value;

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
				
				data_response = request.responseText;
				
				var update_dialog_cont = make_div( "update_dialog_cont", 10, document.body );
				size_div( update_dialog_cont, "300", "200" );
				place_div( update_dialog_cont, window.innerWidth/2 - 150, window.innerHeight/2 - 150 );
				apply_class( update_dialog_cont, "signup_dialog_cont" ); 
				update_dialog_cont.innerHTML = "" + data_response;
				
				var grey_out = make_div( "grey_out", 8, document.body );
				size_div( grey_out, window.innerWidth, get_body_height() );
				place_div( grey_out, 0, 0);
				apply_class( grey_out, "grey_out" ); 
				grey_out.innerHTML = "&nbsp;";
				
				window.setTimeout( function(){
					
					var update_dialog_cont = get_obj( "update_dialog_cont" );
	
					while ( update_dialog_cont.firstChild ) 
					{
						update_dialog_cont.removeChild( update_dialog_cont.firstChild );
					}
					
					document.body.removeChild( update_dialog_cont );
					
					var grey_out = get_obj( "grey_out" );
					
					document.body.removeChild( grey_out );
					
				}, 2000 );
			}
			else
			{
				// error
			}
		}
	}
	
	ajaxrequest( 'assets/scripts/update_user.php', 'null' );	
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










