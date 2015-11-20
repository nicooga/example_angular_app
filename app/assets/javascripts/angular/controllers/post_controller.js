(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .controller("PostController", PostController);

  function PostController(post) {
    var vm = this;

    vm.post = post;
    vm.save = save;

    function save() {
      vm.saving = true;
      vm.post.save()
        .then(function() {
          alert("Tu post ha sido guardado con exito");
        })
        .finally(function() {
          vm.saving = false;
        });
    }
  }
})();
