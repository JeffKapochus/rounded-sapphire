# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({name: 'Jeff', email: 'jeff.kapochus@gmail.com', hashed_password: ''})
Submission.create({description: 'This is a test submission!', user_id: 1})
Party.create([{name: 'Yes', votes: 0, submission_id: 1},{name: 'No', votes: 0, submission_id: 1}])