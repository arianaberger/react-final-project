Rails.application.routes.draw do

  namespace :api do
    resources :accounts
    resources :debits, only: [:new, :show]
    resources :credits, only: [:new, :show]
  end
end
