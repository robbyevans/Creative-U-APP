class User < ApplicationRecord
  has_secure_password

  has_many :tickets
  has_many :events, through: :tickets

  validates :username, presence:true
  validates :username, uniqueness:true
end
