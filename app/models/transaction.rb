require 'pry'

class Transaction < ApplicationRecord
  belongs_to :account

  def self.create_transaction_params(params)
    binding.pry
    t_hash = {}
    total_amount = params[:amount].to_i
    split_amount = total_amount * (params[:percentage].to_i / 100.0)
    main_account_amount = total_amount - (split_amount * 4)

    a = params
    a[:amount] = main_account_amount
    a[:account_id] = 1
    t_hash[:a]

    b = params
    b[:amount] = split_amount
    b[:account_id] = 2
    t_hash[:b]

    c = params
    c[:amount] = split_amount
    c[:account_id] = 3
    t_hash[:c]

    d = params
    d[:amount] = split_amount
    d[:account_id] = 4
    t_hash[:d]

    e = params
    e[:amount] = split_amount
    e[:account_id] = 5
    t_hash[:e]


# #There's gotta be a better way to do this...
#     Account.all.each do |a|
#       if a.id === 1
#         t = {"counterparty": params[:counterparty],
#             "amount": main_account_amount,
#             "date": params[:date],
#             "account_id": a.id,
#             "parent_id":"",
#             "debit":true,
#             "percentage": params[:percentage]}
#         t_array << t
#       else
#         t = {"counterparty": params[:counterparty],
#             "amount": split_amount,
#             "date": params[:date],
#             "account_id": a.id,
#             "parent_id":"",
#             "debit":true,
#             "percentage": params[:percentage]}
#         t_array << t
#       end
#     end
binding.pry
    return t_hash
  end
end
