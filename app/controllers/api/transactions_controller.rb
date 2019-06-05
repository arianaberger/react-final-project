class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token #included when testing with postman
  before_action :set_transaction, only: [:destroy]


  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def create
    #create parent transaction
    if params[:transaction][:debit]
      transaction_parent = Transaction.new(transaction_params)
      transaction_parent.parent_id = transaction_parent.id
      if transaction_parent.save
        update_bankaccount_total(transaction_parent.amount)
      else
        render json: { message: transaction_parent.errors}, status: 400
    else
      #create credit
    end

    if transaction.save
      update_account_total(transaction.account_id)
      render json: transaction
    else
      render json: { message: transaction.errors}, status: 400
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
