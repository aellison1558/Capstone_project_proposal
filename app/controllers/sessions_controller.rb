class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(email, password)

    if @user
      sign_in(@user)
      flash[:success] = ["Logged in!"]
      render :show
    else
      flash[:errors] = ["Invalid email/password combination"]
      render json: ["Invalid email/password combination"]
    end
  end

  def show
    @user = current_user
  end

  def destroy
    sign_out
    flash[:success] = ["Logged out!"]
    render :show
  end

  private
  def email
    params[:email]
  end

  def password
    params[:password]
  end
end
