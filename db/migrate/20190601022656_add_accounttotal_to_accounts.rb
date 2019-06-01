class AddAccounttotalToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :account_total, :integer
  end
end
