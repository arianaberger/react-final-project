
class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token #included when testing with postman
  before_action :set_transaction, only: [:destroy]

  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def create
    #create parent debit
    if params[:transaction][:debit] && params[:transaction][:percentage].empty?
      transaction_parent = Transaction.new(transaction_params)
      if transaction_parent.save
        transaction_parent.parent_id = transaction_parent.id
        Account.update_account_total(transaction_parent.account_id)
        render json: transaction_parent
      else
        render json: { message: transaction_parent.errors}, status: 400
      end
      #Create child debit
    elsif params[:transaction][:debit] && params[:transaction][:percentage]
      # Account.all.each do |a|
      #   if a.id === 1
      #     t_params = Transaction.create_main_amount(transaction_params)
      #     t_new = Transaction.new(t_params)
      #     t_new.save
      #   else
      #     t_params = Transaction.create_split_amount(transaction_params)
      #     t_new = Transaction.new(t_params)
      #     t_new.save
      #   end
      # end
      transactions_array = Transaction.create_transaction_params(transaction_params)
      transactions_array.each do |t|
        new_t = Transaction.new(t)
        binding.pry
        new_t.parent_id = transaction_parent.id
        new_t.save
      end
      binding.pry
      #redirect to homepage with success message
    elsif
      #Create credit
      null
    end
  end

  def destroy
    if @transaction.destroy
      render plain: "Deleted!"
    else
      render json: { message: "Unable to delete transaction"}
    end
  end

  private

    def set_transaction
      @transaction = Transaction.find_by(id: params[:id])
    end

    def transaction_params
      #add .require(:transaction) when form is added
      params.require(:transaction).permit(:counterparty, :amount, :date, :account_id, :parent_id, :debit, :percentage)
    end

end
