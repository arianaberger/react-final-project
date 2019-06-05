class Transaction < ApplicationRecord
  belongs_to :account

    total_amount = 3000 (has parent_id) *save this first*
    then create 4 other amounts with the parent_id value of original Deposit

    percentage of 10
    let fund_distrubution = 3000 * 10/100 (300)
    let main_fund_amount = 3000 - (4*300)


end
