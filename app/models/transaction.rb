require 'pry'

class Transaction < ApplicationRecord
  belongs_to :account

  def total_amount
    self.amount.to_i
  end

  def split_amount
    self.total_amount * (self.percentage.to_i / 100.0)
  end

  def calc_main_amount
    total = self.total_amount
    split = self.split_amount
    main_account_amount = total_amount - (split_amount * 4)
  end

  def calc_split_amount
    binding.pry
    split = self.split_amount
    split
  end

end
