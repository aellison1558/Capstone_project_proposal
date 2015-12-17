# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :email, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank!" }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :projects, foreign_key: "creator_id"

  has_many :backings, foreign_key: "backer_id"
  has_many :backed_projects, through: :backings

  has_many :comments, foreign_key: "author_id"

  has_one :profile_picture, class_name: :Image, as: :imageable

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    (user && user.valid_password?(password)) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
