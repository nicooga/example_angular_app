(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .controller("PostController", PostController);

  function PostController(post) {
    var vm = this;

    vm.post = post;
  }
})();
