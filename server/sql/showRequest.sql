create table if not exists show_request (
	request_id uuid default uuid_generate_v1mc() primary key not null,
	requested_by uuid not null,
	show_title varchar(255) not null,
	country varchar(255) not null,
	release_date timestamp(6),
	genre varchar(255) not null,
	seasons integer,
	number_episodes integer,
	note text,
	created_at timestamp(6) with time zone DEFAULT Now(),
	processed_by uuid,
	constraint fk_processed_by
		foreign key(processed_by)
			references users(id_user),
	constraint fk_requested_by
		foreign key(requested_by)
			references users(id_user)		
);

insert into show_request (
    requested_by, 
    show_title, 
    country, 
    release_date, 
    genre, 
    seasons, 
    number_episodes, 
    note, 
    created_at, 
    processed_by
    ) values (
        $1, 
        $2, 
        $3, 
        $4, 
        $5, 
        $6, 
        $7, 
        $8, 
        $9, 
        $10);


delete from show_request where request_id = $1;