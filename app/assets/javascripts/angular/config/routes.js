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
        url: "/posts",
        template: "<div ui-view></div>",
      })
        .state("posts.index", {
          url: "/",
          templateUrl: "angular/posts/index",
          controller: "PostIndexController as postIdxCtrl"
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
              return new Post.get($stateParams.id);
            }
          }
        })
  }
})();
