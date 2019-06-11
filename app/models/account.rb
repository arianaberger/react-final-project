class Account < ApplicationRecord
  has_many :transactions

  def remove_parent_debits
    transactions = self.transactions.map { |t| t if t.percentage != 100 }.compact
    self.transactions = transactions
    return self
  end

  def self.update_account_totals
    Account.all.each do |a|
      account = Account.find_by(id: a.id)
      account.account_total = account.calc_account_total
      account.save
    end
  end

  def calc_account_total
    t_transactions = self.transactions.map { |t| t if t.percentage != 100 }.compact
    t_debits = t_transactions.map { |t| t if t.debit }.compact
    t_credits = t_transactions.map { |t| t if !t.debit }.compact
    account_total = t_debits.sum(&:amount) - t_credits.sum(&:amount)
  end

end
