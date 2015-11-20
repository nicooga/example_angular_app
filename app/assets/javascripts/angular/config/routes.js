(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .config(configRoutes);

  function configRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("root", {
        url: "/",
        templateUrl: "angular/root"
      })

      .state("posts", {
        abstract: true,
        template: "<div ui-view></div>",
        url: "/posts"
      })
        .state("posts.index", {
          url: "/",
          templateUrl: "angular/posts/index",
          controller: "PostIndexController as postIdxCtrl",
          resolve: {
            posts: function(Post) { return Post.query() }
          }
        })
        .state("posts.new", {
          url: "/new",
          templateUrl: "angular/posts/edit",
          controller: "PostController as postCtrl",
          resolve: {
            post: function(Post) { return new Post; }
          }
        })
        .state("posts.edit", {
          url: "/:id",
          templateUrl: "angular/posts/edit",
          controller: "PostController as postCtrl",
          resolve: {
            post: function(Post, $stateParams) {
              return Post.get($stateParams.id);
            }
          }
        });
  }
})();
