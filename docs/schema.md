# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
summary     | string    |
description | text      | not null
creator_id  | integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references categories), indexed
goal_amt    | integer   | not null,
start_date  | date      | not null,
end_date    | date      | not null,

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
imageable   | reference | polymorphic association, indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## backings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
backer_id   | integer   | not null, foreign key (references users), indexed, unique [project_id]
project_id  | integer   | not null, foreign key (references projects),
amount      | integer   | not null



#comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null



## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique



#BONUS

##updates
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null

#likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
likeable    | reference | for polymorphic association, indexed, unique [liker_id]
liker_id    | integer   | not null, foreign key (references users), indexed
