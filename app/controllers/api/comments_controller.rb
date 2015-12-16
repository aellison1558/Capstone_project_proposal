class Api::CommentsController < ApplicationController
  before_action :require_sign_in

  def create
    @comment = current_user.comments.new(comment_params)
    @project = @comment.project
    if @comment.save
      render :show
    else
      render json: "something went wrong"
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @project = @comment.project
    render :show
  end

  private
  def comment_params
    params.require('comment').permit(:project_id, :body)
  end
end
