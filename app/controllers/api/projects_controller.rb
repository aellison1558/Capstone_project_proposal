class Api::ProjectsController < ApplicationController
  before_action :require_sign_in, except: [:index, :show]

  def index
    @category = Category.includes(:projects).find(params[:category_id])
    @projects = @category.projects
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

    validate_user

    @project.destroy
    render :show
  end

  def update
    @project = Project.find(params[:id])

    validate_user

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

  def validate_user
    redirect_to root_url if @project.user_id != current_user.id
  end
end
