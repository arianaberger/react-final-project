class Account < ApplicationRecord
  has_many :transactions

  def account_total
    account = Account.find_by(id: params[:id])
    debits = []
    credits = []

    account.transactions.each do |t|
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
