module Api
  module V1
    class UsersController < ApplicationController
      def new
        if User.find_by(email: params[:email]) 
          render :json => {message: 'email is already exist'}
        else
          User.create(name: params[:name], email: params[:email], password: params[:password])
          render :json => {message: 'ok'}
        end
      end
    end
  end
end