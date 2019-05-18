class AddPercentageToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :percentage, :integer
  end
end
