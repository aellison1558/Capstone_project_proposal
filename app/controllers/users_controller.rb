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
      flash[:success] = ["User Created!"]
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = ["User Updated!"]
    else
      flash[:errors] = @user.errors.full_messages
    end
    render :show
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      flash[:success] = ["User Destroyed!"]
      @users = User.all
      render :index
    else
      flash[:errors] = @user.errors.full_messages
      @users = User.all
      render :index
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
