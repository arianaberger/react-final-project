class Account < ApplicationRecord
  has_many :debits
  has_many :credits
end
