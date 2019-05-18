class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :counterparty, :amount, :date, :parent_id, :debit, :percentage
  belongs_to :account
end
