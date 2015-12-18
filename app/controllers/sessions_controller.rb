class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(email, password)

    if @user
      sign_in(@user)
      render :show
    else
      render json: ["Invalid email/password combination"]
    end
  end

  def show
    @user = current_user
  end

  def destroy
    sign_out
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
