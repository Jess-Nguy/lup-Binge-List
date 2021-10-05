create table if not exists roles ( 
	id_role serial primary key not null,
	name text not null,
	created_at timestamp(6) with time zone DEFAULT Now(),
	updated_at timestamp(6) with time zone null
);