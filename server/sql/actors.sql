create table if not exists actors (
	id_actor uuid default uuid_generate_v1mc() primary key not null,
	first_name varchar(255),
	last_name varchar(255),
	created_at timestamp(6) with time zone default Now() not null,
	updated_at timestamp(6) with time zone
);