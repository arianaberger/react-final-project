require 'pry'

class Transaction < ApplicationRecord
  belongs_to :account

  def calc_main_amount
    total = self.total_amount
    split = self.split_amount
    main_account_amount = total_amount - (split_amount * 4)
  end

  def calc_split_amount
    split = self.split_amount
  end

  def total_amount
    self.amount.to_i
  end

  def split_amount
    self.total_amount * (self.percentage.to_i / 100.0)
  end

  def get_parent(i)
    if Transaction.all.count
      Transaction.all[Transaction.all.count - (i+1)].id
    end
  end

  def self.get_transaction_totals
    t_parent_debits = Transaction.all.map { |t| t if t.percentage == 100 }.compact
    t_credits = Transaction.all.map { |t| t if !t.debit }.compact
    total = t_parent_debits.sum(&:amount) - t_credits.sum(&:amount)
  end

end
