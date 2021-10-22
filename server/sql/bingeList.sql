create table if not exists bingeList (
	id_list uuid default uuid_generate_v1mc() primary key not null,
	user_id uuid,
	favourite boolean,
	status varchar(255),
	score integer,
	rewatch integer,
	episode_progress integer,
	show_id uuid,
	created_at timestamp(6) with time zone default Now() not null,
	updated_at timestamp(6) with time zone
);