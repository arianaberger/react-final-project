class CreateCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :credits do |t|
      t.string :receiver
      t.datetime :date
      t.integer :amount

      t.belongs_to :account, index: true, foreign_key: true

      t.timestamps
    end
  end
end
