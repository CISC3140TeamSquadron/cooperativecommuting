DROP TABLE IF EXISTS cc_users;

CREATE TABLE cc_users (
  user_id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(40),
	pword VARCHAR(20),
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	gender TINYINT(1),
	home_apt VARCHAR(20),
	home_street VARCHAR(20),
	home_city VARCHAR(20),
	home_state VARCHAR(10),
	home_zip varchar(5),
	home_country VARCHAR(100),
	commute_street VARCHAR(20),
	commute_city VARCHAR(20),
	commute_state VARCHAR(10),
	commute_zip VARCHAR(5),
	commuting_for VARCHAR(25),
	driver VARCHAR(3),
	owns_vehicle TINYINT(1),
	vehicle_pref VARCHAR(20),
	user_desc VARCHAR(500),
	PRIMARY KEY ( user_id )
);

INSERT INTO cc_users (email, pword, first_name, last_name, gender, home_apt, home_street, home_city, home_state, home_zip, home_country, commute_street, commute_city, commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, user_desc) VALUES ('coolguy@gmail.com' ,  
'Calc_Iz*AweSum' , 'Isaac' , 'Newton', '1', 'Apt.2F' , '12 Broadway Ave.' , 'New York' , 'NY', '10001' , 'USA' , '55 W 14th St.' , 'New York' , 'NY' , '10001' , 'Work' , 'Yes' , '1' , 'Car' , 'Physicist' );

INSERT INTO cc_users (email, pword, first_name, last_name, gender, home_apt, home_street, home_city, home_state, home_zip, home_country, commute_street, commute_city, commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, user_desc) VALUES ('testing211@gmail.com' ,  
'Sh^7722m_' , 'John' , 'Trout', '1', 'Apt.5a' , '166 Main St.' , 'Philadelphia' , 'PA', '13345' , 'USA' , '55 John St.' , 'Boston' , 'MA' , '19912' , 'Travel' , 'No' , '0' , 'Car' , 'Writer' );

INSERT INTO cc_users (email, pword, first_name, last_name, gender, home_apt, home_street, home_city, home_state, home_zip, home_country, commute_street, commute_city, commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, user_desc) VALUES ('1Q84cats@gmail.com' ,  
'j_WalkerKk' , 'Toru' , 'Okada', '1', 'Apt. 2B' , '33 Cranston St.' , 'Baltimore' , 'MD', '19955' , 'USA' , '25 Lewiston St.' , 'Staten Island' , 'NY' , '10314' , 'Travel' , 'Yes' , '1' , 'Car' , 'Detective' );

INSERT INTO cc_users (email, pword, first_name, last_name, gender, home_apt, home_street, home_city, home_state, home_zip, home_country, commute_street, commute_city, commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, user_desc) VALUES ('mysteryMan1930@gmail.com' ,  
'hard_Boiled_30*&$' , 'Humphrey' , 'Bogart', '1', '' , '132 Madison Ave.' , 'New York' , 'NY', '10001' , 'USA' , '1478 15th. Ave.' , 'Brooklyn' , 'NY' , '11228' , 'Work' , 'Yes' , '1' , 'Car' , 'Detective' );

INSERT INTO cc_users (email, pword, first_name, last_name, gender, home_apt, home_street, home_city, home_state, home_zip, home_country, commute_street, commute_city, commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, user_desc) VALUES ('jsmith7@gmail.com' ,  
'as_app**())' , 'Jane' , 'Smith', '1', '' , '54 Bonner Ave.' , 'Bronx' , 'NY', '13345' , 'USA' , '1 E 161st St.' , 'Bronx' , 'NY' , '10451' , 'Work' , 'Yes' , '0' , 'Car' , 'Field Manager' );

SELECT * FROM cc_users;
