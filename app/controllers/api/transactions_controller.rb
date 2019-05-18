class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_transaction, only: [:destroy]


  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
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
      params.permit(:counterparty, :amount, :date, :account_id, :parent_id, :debit, :percentage)
    end

end
