Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      # scope :api, defaults: {format: :json} do
      resources :examples
      post '/signup', to: 'users#new'
      get '/login', to: 'sessions#new'
      post '/login', to: 'sessions#create'
      post '/colour', to: 'examples#new'
    end
  end
end
