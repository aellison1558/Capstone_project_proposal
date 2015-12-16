class Api::BackingsController < ApplicationController
  before_action :require_sign_in

  def create
    @backing = current_user.backings.new(backing_params)
    @project = @backing.project
    if @backing.save
      render :show
    else
      render json: "Something went wrong"
    end
  end

  def destroy
    @backing = Backing.find(params[:id])
    @backing.destroy
    @project = @backing.project
    render :show
  end


  private
  def backing_params
    params.require('backing').permit(:project_id, :amount)
  end
end
