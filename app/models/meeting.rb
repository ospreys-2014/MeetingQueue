class Meeting < ActiveRecord::Base
  has_many :participants
end
