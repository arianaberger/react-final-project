Rails.application.routes.draw do

root 'dashboard#home'

  namespace :api do
    resources :accounts, except: [:index]
    resources :debits, only: [:new, :create, :destroy]
    resources :credits, only: [:new, :create, :destroy]
  end
end
