Rails.application.routes.draw do
  resources :parties
  resources :submissions
  resources :users
  get 'submissions/user/:id', to: 'submissions#get_user_submissions'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
