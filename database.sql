-- users table
CREATE TABLE users (
    user_id serial primary key,
    email varchar (100) unique,
    password varchar (50) not null,
    created_at date default current_date
);