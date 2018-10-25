create table company
(
	id serial primary key,

	name varchar(100), 
	full_name varchar(100), 
	phone_number varchar(100), 
	street varchar(100), 
	postal_code varchar(100), 
	rfc varchar(100),
	ieps double,
	iva double,
	latitude double,
	longitude double,

	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table ticket_type
(
	id serial primary key,

	name varchar(100), 

	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table mural
(
	id serial primary key,

	title varchar(100), 
	author_name varchar(100), 
	author_last_name varchar(100), 
	description text, 


	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table place_type
(
	id serial primary key,

	name varchar(100), 

	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table user
(
	id serial primary key,

	user_type enum('administrator', 'client'),
	name varchar(100), 
	last_name varchar(100), 
	email varchar(100), 
	birthdate date,
	password varchar(100),
	postal_code varchar(100),
	phone_number varchar(100),

	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table tour
(
	id serial primary key,

	name varchar(100), 
	image_path varchar(1000), 
	description text, 
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table narrative
(
	id serial primary key,

	audio_path varchar(1000), 
	description text, 
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table date_interval
(
	id serial primary key,

	start_date date,
	end_date date,
	status enum('in_service', 'out_of_service'),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table hour_interval
(
	id serial primary key,

	start_time time,
	end_time time,
	frequency time,
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table stop
(
	id serial primary key,

	name varchar(100),
	longitude double,
	latitude double,
	description text,
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table image
(
	id serial primary key,

	image_path varchar(1000),
	description text,
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table price
(
	id serial primary key,

	amount double,

	ticket_type_id bigint unsigned,
	tour_id bigint unsigned,

	foreign key(ticket_type_id) references ticket_type(id),
	foreign key(tour_id) references tour(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table place
(
	id serial primary key,

	name varchar(100),
	longitude double,
	latitude double,
	description text,

	place_type_id bigint unsigned,
	narrative_id bigint unsigned,

	foreign key(place_type_id) references place_type(id),
	foreign key(narrative_id) references narrative(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table purchase
(
	id serial primary key,

	sub_total double,
	total double,

	company_id bigint unsigned,
	user_id bigint unsigned,

	foreign key(company_id) references company(id),
	foreign key(user_id) references user(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);


create table ticket
(
	id serial primary key,

	total double,
	client_name varchar(100),
	client_last_name varchar(100),
	client_age int,
	tour_date date,
	qr_code text,

	purchase_id bigint unsigned,
	price_id bigint unsigned,

	foreign key(purchase_id) references purchase(id),
	foreign key(price_id) references price(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table bus
(
	id serial primary key,

	capacity int,
	sold_tickets int,
	status enum('in_service', 'out_of_service'),

	tour_id bigint unsigned,
	mural_id bigint unsigned,

	foreign key(tour_id) references tour(id),
	foreign key(mural_id) references mural(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table schedule
(
	id serial primary key,

	date_interval_id bigint unsigned,
	hour_interval_id bigint unsigned,

	foreign key(date_interval_id) references date_interval(id),
	foreign key(hour_interval_id) references hour_interval(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table tour_schedule
(
	id serial primary key,

	tour_id bigint unsigned,
	schedule_id bigint unsigned,

	foreign key(tour_id) references tour(id),
	foreign key(schedule_id) references schedule(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table tour_place
(
	id serial primary key,

	tour_id bigint unsigned,
	place_id bigint unsigned,

	foreign key(tour_id) references tour(id),
	foreign key(place_id) references place(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table place_image
(
	id serial primary key,

	image_id bigint unsigned,
	place_id bigint unsigned,

	foreign key(image_id) references image(id),
	foreign key(place_id) references place(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table tour_stop
(
	id serial primary key,

	tour_id bigint unsigned,
	stop_id bigint unsigned,

	foreign key(tour_id) references tour(id),
	foreign key(stop_id) references stop(id),
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table activated_at
(
	id serial primary key,
	
	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);

create table bracelet
(
	id serial primary key,

	status enum('hop_on', 'hop_off'),

	tour_id bigint unsigned,
	ticket_id bigint unsigned,
	activated_at_id bigint unsigned,

	foreign key(tour_id) references tour(id),
	foreign key(ticket_id) references ticket(id),
	foreign key(activated_at_id) references activated_at(id),

	created_at datetime default current_timestamp, 
	updated_at datetime default current_timestamp on update current_timestamp
);