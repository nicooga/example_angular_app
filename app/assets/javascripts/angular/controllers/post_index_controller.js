(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .controller("PostIndexController", PostIndexController);

  function PostIndexController(Post) {
    var vm = this;

    vm.destroy = destroy;

    Post.query().then(function(posts) {
      vm.posts = posts;
    });

    function destroy(post) {
      post.delete().then(function() {
        var index = vm.posts.indexOf(post);
        vm.posts.splice(index, 1);
      });
    }
  }
})();
