create table if not exists characters (
	id_character uuid default uuid_generate_v1mc() primary key not null,
	first_name varchar(255),
	last_name varchar(255),
	show_id uuid[],
	created_at timestamp(6) with time zone default Now() not null,
	updated_at timestamp(6) with time zone
);