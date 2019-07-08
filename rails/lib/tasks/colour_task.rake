namespace :colour_task do
  desc "create examples db data"
  task :create => :environment do
    20.times do
      colour_string = Faker::Color.color_name
      name_string = Faker::Name.name
      Example.create(name: name_string, colour: colour_string)
    end
  end
end
