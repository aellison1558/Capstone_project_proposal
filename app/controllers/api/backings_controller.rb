class Api::BackingsController < ApplicationController
  before_action :require_sign_in

  def create
    @backing = current_user.backings.new(backing_params)
    @project = @backing.project
    if @backing.save
      flash[:success] = ["#{@project.title} backed!"]
      render :show
    else
      flash[:errors] = @backing.errors.full_messages
      render json: "Something went wrong"
    end
  end

  def destroy
    @backing = Backing.find(params[:id])
    if @backing.destroy
      flash[:success] = ["Support withdrawn!"]
    else
      flash[:errors] = @backing.errors.full_messages
    end
    @project = @backing.project
    render :show
  end


  private
  def backing_params
    params.require('backing').permit(:project_id, :amount)
  end
end
