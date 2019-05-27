class Account < ApplicationRecord
  has_many :transactions

  def self.account_total(account_id)
    account = Account.find_by(id: account_id)
    debits = []
    credits = []

    debits = account.transactions.each do |t|
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
