class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render :show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    @users = User.all
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
