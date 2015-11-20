(function() {
  "use strict";

  angular
    .module("exampleAngularApp")
    .factory("Post", Post);

  function Post(railsResourceFactory) {
    return railsResourceFactory({
      url: "/posts",
      name: "post"
    });
  }
})();
