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
      def destroy
        puts 'delete method in'
        example = Example.find(params[:id])
        if !example
          render json: { status: 'FAIL', message: 'not exists'}
        else
          example.destroy
          render json: { status: 'SUCCESS!', message: 'data delete'}
        end
      end
    end
  end
end