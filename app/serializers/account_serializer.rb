class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :main_account, :account_total
  has_many :transactions
end
