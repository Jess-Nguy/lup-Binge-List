-- File should not be runnable as a whole.

CREATE EXTENSION "uuid-ossp";

create table if not exists users ( 
	id_user uuid default uuid_generate_v1mc() primary key not null,
	username text not null,
	email text not null,
	google_id text not null,
	time_zone text not null,
	profile_image text,
	role text not null,
	created_at timestamp(6) with time zone DEFAULT Now(),
	updated_at timestamp(6) with time zone null
);

INSERT INTO users (
    username, 
    email, 
    google_id, 
    time_zone, 
    profile_image, 
    role) VALUES (
    '${user.username}',
    '${user.email}',
    '${user.google_id}',
    '${user.time_zone}',
    '${user.profile_image}',
    '${user.role}') 
    RETURNING *

UPDATE users SET 
username='${user.username}', 
email='${user.email}', 
profile_image='${user.profile_image}' 
WHERE 
google_id = '${user.google_id}' 
RETURNING *

SELECT * FROM users WHERE email = '${email}';

CREATE OR REPLACE FUNCTION user_updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at := Now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';


	
CREATE TRIGGER trg_update_tbl_users BEFORE UPDATE
ON users FOR EACH ROW EXECUTE PROCEDURE 
user_updated_at();