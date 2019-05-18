class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :counterparty, :amount, :date, :parent_id
  belongs_to :account
end
