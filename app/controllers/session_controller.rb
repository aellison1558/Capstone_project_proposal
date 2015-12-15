class SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(username, password)

    if @user
      sign_in(@user)
    else
    end
    redirect_to root_url
  end

  def destroy
    sign_out
    redirect_to root_url
  end

  private
  def username
    params[:user][:username]
  end

  def password
    params[:user][:password]
  end
end
