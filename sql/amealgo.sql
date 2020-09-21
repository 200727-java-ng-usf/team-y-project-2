drop table if exists amg_users;
drop table if exists amg_votes;
drop table if exists amg_likes;
drop table if exists amg_cuisines;
drop table if exists amg_meal;
drop table if exists amg_meal_users;

create table amg_users(
	id				serial,
	username 		varchar(255) not null,
	password_hash	bytea not null,
	password_salt	bytea not null,
	email			varchar(255) unique not null,
	constraint amg_user_id
		primary key(id)
);
create table amg_votes(
	id				serial,

);
create table amg_likes(
	id				serial,

);
create table amg_cuisines(
	id				serial,

);
create table amg_meal(
	id				serial,

);
create table amg_meal_users(
	id				serial,

);