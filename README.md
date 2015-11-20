This is an example app that features a CRUD for posts.
Made with Rails and AngularJS on the front.

## Installation
~~~bash
bundle install
# create config/database.yml
rake db:create db:migrate
rake bower:install # install assets using bower, see ./Bowerfile
~~~

## References

- [bower-rails](https://github.com/rharriso/bower-rails/): used for managing assets
- [angular](https://angularjs.org/)
- [angular-ui/ui-router](https://github.com/angular-ui/ui-router): the router
- [angularjs-rails-resource](https://github.com/FineLinePrototyping/angularjs-rails-resource): used to comunicate with the API
