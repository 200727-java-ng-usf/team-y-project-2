drop table if exists amg_users;
drop table if exists amg_votes;
drop table if exists amg_likes;
drop table if exists amg_cuisines;
drop table if exists amg_meal;
drop table if exists amg_meal_users;

create table amg_users(
	amg_user_id		serial,
	username 		varchar(255) not null,
	password_hash	bytea not null,
	password_salt	bytea not null,
	email			varchar(255) unique not null,
	constraint amg_user_id_pk
		primary key(amg_user_id)
);
create table amg_votes(
	amg_vote_id				serial,
	restaurant				varchar(255),
	vote_meal_id			int,
	constraint amg_vote_id_pk
		primary key(amg_vote_id)
);
create table amg_likes(
	amg_like_id				serial,
	amg_like				varchar(255),
	amg_user_id 			int,
	constraint amg_like_id_pk
		primary key(amg_like_id)

);
create table amg_cuisines(
	amg_cuisine_id			serial,
	constraint amg_cuisine_id_pk
		primary key(amg_cuisine_id)

);
create table amg_meal(
	amg_meal_id				serial,
	constraint amg_meal_id_pk
		primary key(amg_meal_id)

);
create table amg_meal_users(

);