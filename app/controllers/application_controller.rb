class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?
  after_filter :flash_to_http_header

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def require_sign_in
    redirect_to new_session_url unless signed_in?
  end

  def sign_in(user)
    session[:session_token] = user.session_token
  end

  def sign_out
    current_user.reset_token!
    session[:session_token] = nil
    @current_user = nil
  end

  private
  def flash_to_http_header
    return unless request.xhr?
    return if flash.empty?
    response.headers['X-FlashMessages'] = flash.to_hash.to_json
    flash.discard  # don't want the flash to appear when you reload page
  end

end
