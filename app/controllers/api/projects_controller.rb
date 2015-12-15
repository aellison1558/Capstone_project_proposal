class Api::ProjectsController < ApplicationController
  def index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = current_user.projects.new(project_params)

    if @project.save
      render :show
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to root_url
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    render :show
  end

  private
  def project_params
    params.require('project').permit(
      :title,
      :summary,
      :description,
      :goal_amt,
      :current_amt,
      :start_date,
      :end_date,
      :category_id
      )
  end
end
