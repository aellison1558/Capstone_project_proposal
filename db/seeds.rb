# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  {email: 'vader@empire.gov', username: "Darth Vader", password: "ihaveyounow"},
  {email: 'emperor@empire.gov', username: "Da Emperor", password: "sithrule"},
  {email: 'mofftarkin@empire.gov', username: "Grand Moff Tarkin", password: 'tarkindoctrine'}
])

Image.create([
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'f9amikzhv71is3s9wj0f'},
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'asrjx9xhcijyrjesvfhd'},
  {imageable_id: '1', imageable_type: 'Project', image_public_id: 'yfy0ylot8hrvppittm6w'},
  {imageable_id: '1', imageable_type: 'User', image_public_id: 'oxba40nyjywfxglzhpx7'},
])

Project.create(
title: "Death Star",
summary: "Moon-sized battlestation capable of destroying a planet",
description: "Specifications: Length: 120km Width: 120km Height: 120km
Armament: Superlaser: 1 Tractor Beams: 768 Turbolasers: 15,000 Thousands of additional small weapons emplacements Crew: 342,953 Imperial Navy 25,984 Stormtroopers
",
goal_amt: 850000000000000000,
start_date: Date.new,
end_date: Date.new,
category_id: 1,
creator_id: 2
)

Category.create([
  {name: 'Superweapons'},
  {name: 'Imperial Army'},
  {name: 'Imperial Navy'},
  {name: 'Technology'},
  {name: 'Economy'},
  {name: 'Civil Infrastructure'},
  {name: 'Exploration'},
  {name: "Mysteries of the Force"},
  {name: "Private Projects"}
])

Backing.create([
  {backer_id: 1, project_id: 1, amount: 1000000000},
  {backer_id: 3, project_id: 1, amount: 1000000000}
])

Comment.create([
  {author_id: 2, project_id: 1, body: "Good, good.  Let the fund flow through you!"}
])
