module Api
  module V1
    class ExamplesController < ApplicationController
      def index
        examples = Example.all.select(:id, :name, :colour)
        render json: examples
      end
      def new
        Example.create(name: params[:name], colour: params[:colour])
      end
    end
  end
end