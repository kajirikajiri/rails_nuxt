Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      # scope :api, defaults: {format: :json} do
      resources :examples
    end
  end
end

# Rails.application.routes.draw do
#   scope :api, defaults: {format: :json} do
#     resources :examples
#     resources :posts
#   end
# end