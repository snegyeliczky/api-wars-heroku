DROP TABLE IF EXISTS public.users;
CREATE TABLE users (
    id INTEGER,
    username text,
    password_hash varchar(60)
);

DROP TABLE IF EXISTS public.planet_votes_table;
CREATE TABLE planet_votes_table (
    id INTEGER,
    planet_id INTEGER,
    planet_name VARCHAR,
    user_id INTEGER,
    submission_time date
);

INSERT INTO users
VALUES (1,'admin1','$2b$12$c6/vuZGDQgvlEgN2ThPDa.aPMBLQDTyKRoYAEySMVYn6IX8m30/0G')