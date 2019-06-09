class Account < ApplicationRecord
  has_many :transactions

  def self.update_account_total(account_id)
    account = Account.find_by(id: account_id)
    account.account_total = account.calc_account_total
    account.save
  end

  def calc_account_total
    debits = []
    credits = []

    self.transactions.each do |t|
      # binding.pry
      if t.amount && t.debit && t.percentage != 100
          debits.push(t.amount)
          # binding.pry
      elsif t.amount && !t.debit && t.percent != 100
        credits.push(t.amount)
      end
    end
    account_total = debits.sum - credits.sum
    # binding.pry
    return account_total
  end

end
