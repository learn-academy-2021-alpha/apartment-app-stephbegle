Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #root to: 'home#index'
  #need a controller 'home' and rails knows how to route to index view (when there is no index method in the controller but still need to g the controller)
  # resources :apartments
  # devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
  #make a get request that has this path? and route to home index, make sure these requests constraints are present in the html format and if everything is good, route to home?
end
