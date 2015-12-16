class Api::ProjectsController < ApplicationController
  before_action :require_sign_in, except: [:index, :show]

  def index
    if params[:category_id]
      @category = Category.includes(:projects).find(params[:category_id])
      @projects = @category.projects
    else
      @projects = Project.all
    end
  end

  def show
    @project = Project.includes(:backings, :comments).find(params[:id])
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
    @category = Category.includes(:projects).find(@project.category_id)
    @projects = @category.projects
    render :index
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
      :start_date,
      :end_date,
      :category_id
      )
  end

  def validate_user
    redirect_to root_url if @project.creator_id != current_user.id
  end
end
