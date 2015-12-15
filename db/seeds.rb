# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create(
title: "Death Star",
summary: "The Ultimate Weapon",
description: "Moon-sized battlestation capable of destroying a planet",
goal_amt: 999999999,
current_amt: 0,
start_date: Date.new,
end_date: Date.new,
category_id: 1,
creator_id: 1
)
