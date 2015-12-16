Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy, :show]

  namespace :api do
    resources :categories do
      resources :projects, only: [:index]
    end

    resources :projects, except: [:index]
  end
end
