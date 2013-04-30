DROP TABLE IF EXISTS cc_users;

CREATE TABLE cc_users (
  user_id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(40),
	pword VARCHAR(20),
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	gender TINYINT(1),
	home_street VARCHAR(20),
	home_city VARCHAR(20),
	home_zip varchar(5),
	commute_street VARCHAR(20),
	commute_city VARCHAR(20),
	commute_zip VARCHAR(5),
	driver VARCHAR(3),
	owns_vehicle TINYINT(1),
	vehicle_pref VARCHAR(20),
	user_desc VARCHAR(500),
	commuting_for VARCHAR(25),
	home_apt VARCHAR(20),
	home_country VARCHAR(100),
	home_state VARCHAR(10),
	commute_state VARCHAR(10),
	PRIMARY KEY ( user_id )
);

DESC cc_users;
