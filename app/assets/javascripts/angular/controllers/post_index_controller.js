(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .controller("PostIndexController", PostIndexController);

  function PostIndexController(Post) {
    var vm = this;

    Post.query().then(function(posts) {
      vm.posts = posts;
    });
  }
})();
