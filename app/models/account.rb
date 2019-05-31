class Account < ApplicationRecord
  has_many :transactions

  def update_totals(accounts)
    accounts.each do |account|
      account.account_total = accounts.calc_account_total
    end
  end

  def calc_account_total
    debits = []
    credits = []

    self.transactions.each do |t|
      if t.debit
        debits.push(t.amount)
      else
        credits.push(t.amount)
      end
    end

    account_total = debits.sum - credits.sum
    return account_total
  end

end
