class Transaction < ApplicationRecord
  belongs_to :account

  def self.create_transaction_params(params)
    t_array = []
    total_amount = params[:amount].to_i
    split_amount = total_amount * (params[:percentage].to_i / 100.0)
    main_account_amount = total_amount - (split_amount * 4)

    Account.all.each do |a|
      t = params
      if a.id === 1
        t[:amount] = main_account_amount
        t[:account_id] = a.id
        t_array.push(t)
      else
        t[:amount] = split_amount
        t[:account_id] = a.id
        t_array.push(t)
      end
    end
    return t_array
    raise t_array.inspect
  end
  # create method that takes the % of total x4
  # create transaction object for each
  # create transaction object that goes into main account of the difference
  # {"counterparty"=>"Warehouse 29",
  #   "amount"=>"500",
  #   "date"=>"June 12 2019",
  #   "account_id"=>1,
  #   "parent_id"=>"",
  #   "debit"=>true,
  #   "percentage"=>"3"}

end
