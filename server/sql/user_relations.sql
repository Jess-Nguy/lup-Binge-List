create table if not exists user_relations (
	id_user_relations uuid default uuid_generate_v1mc() primary key not null,
	type varchar(255),
	last_name varchar(255),
	user_id1 uuid,
	user_id2 uuid,
	created_at timestamp(6) with time zone default Now() not null,
	updated_at timestamp(6) with time zone
);