source 'https://rubygems.org'

gem 'rails', '3.2.8'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :orm do
  gem 'mysql2'
  gem 'gravtastic'
end

group :authorization do
  gem "devise"
  gem 'devise_invitable'
  gem "cancan"
end

group :views do
  gem "haml"
  gem "haml-rails"
  gem "formtastic"
  gem 'formtastic-bootstrap'
  gem 'kaminari'
  gem "tabulous"
  gem 'jbuilder'
end

group :faye do
  gem 'faye', require: false
  gem "redis"
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'therubyracer'
  gem "rails-backbone"

  gem 'haml_coffee_assets'

  gem "i18n-js"
  gem 'chosen_rails'
  gem 'uglifier', '>= 1.0.3'
  gem 'jquery-rails'

  gem 'twitter-bootstrap-rails', git: 'git://github.com/seyhunak/twitter-bootstrap-rails.git'
  gem 'quiet_assets'
  gem 'compass-rails'
end

group :development, :test do
  gem 'rspec-rails'
  gem "factory_girl_rails"
  gem 'sextant'
  gem 'annotator'
end

group :test do
  gem "timecop"
  gem "nyan-cat-formatter"
  gem 'database_cleaner'
  gem 'shoulda-matchers'
  gem "spork"
end
