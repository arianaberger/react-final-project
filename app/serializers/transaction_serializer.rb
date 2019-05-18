class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :counterparty, :amount, :date
  belongs_to :account
end
