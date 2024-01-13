Rails.application.routes.draw do
  
  devise_for :users
  get 'sheet/creation'
  get 'character/view'
  get 'labels/races'
  get 'labels/classes'
  get 'labels/backgrounds'
  root 'home#index'

  resources :races, param: :name, only: [ :show ]
  resources :subraces, param: :name, only: [ :show ]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
