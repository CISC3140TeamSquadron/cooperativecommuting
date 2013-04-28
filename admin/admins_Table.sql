DROP TABLE admin_Users;

CREATE TABLE admin_Users (user_email VARCHAR(40) PRIMARY KEY, user_pass VARCHAR(10), firstname VARCHAR(30), lastname VARCHAR(30));

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('deeprecious001@gmail.com' , 'cisc3140_0' , 'Dionne' , 'Alexander');

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('clearskyopening@gmail.com' , 'cisc3140_1' , 'Peter' , 'Cheung');

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('kfile3721@gmail.com' , 'cisc3140_2' , 'Konstantin' , 'Filenko');

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('dlettier@gmail.com' , 'cisc3140_3' , 'David' , 'Lettier');

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('seyfip@gmail.com' , 'cisc3140_4' , 'Seyfaddin' , 'Pashayev');

INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) VALUES ('draisy@gmail.com' , 'cisc3140_5' , 'Draisy' , 'Sabel');

SELECT * FROM admin_Users;