create table if not exists comment (
	id_comment uuid default uuid_generate_v1mc() primary key not null,
	show_id uuid,
	user_id uuid,
	comment text,
	created_at timestamp(6) with time zone default Now() not null,
	updated_at timestamp(6) with time zone
);
	