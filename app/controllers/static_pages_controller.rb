class StaticPagesController < ApplicationController
  def angular_app
    render "angular/index"
  end

  def render_angular_template
    render "angular/#{params[:path]}", layout: nil
  end
end

