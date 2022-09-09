Rails.application.routes.draw do
  # get 'likes/photo'
  # get 'likes/user'
  get 'private/test'
get 'private/getLoginUser'
  devise_for :users,
  path: '',
               path_names: {
                 sign_in: 'login',
                 sign_out: 'logout',
                 registration: 'signup'
               },
    
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    
  }
  
  resources :photos do
    resources :likes
  end

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
