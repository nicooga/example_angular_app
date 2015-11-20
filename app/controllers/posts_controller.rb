class PostsController < ApplicationController
  include ResourceController

  self.resource_class = Post

  def permitted_params
    params.require(:post).permit :title, :body
  end
end
