Rails.application.routes.draw do
  resources :posts

  controller :static_pages do
    get "/angular/(*path)", action: :render_angular_template
    get "/(*path)", action: :angular_app
  end
end
