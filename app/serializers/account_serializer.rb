class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :main_account
  has_many :transactions
end
