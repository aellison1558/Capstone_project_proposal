class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(email, password)

    if @user
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email/password combination"]
      render :new
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
    params[:user][:email]
  end

  def password
    params[:user][:password]
  end
end
