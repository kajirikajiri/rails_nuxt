module Api
  module V1
    class SessionsController < ApplicationController
      def new
      end
      def create
        # puts(User.all.inspect)
        user = User.find_by(email: params[:email].downcase)
        if user && user.authenticate(params[:password])
          render :json => {result: 'OK user'}
        else
          render :json => {result: 'email or password invalid'}
        end
      end
    end
  end
end