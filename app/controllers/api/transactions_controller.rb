class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token

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
    #setting the current transaction as private method was not working in Postman
    transaction = Transaction.find_by(id: params[:id])
    if transaction.destroy
      render plain: "Deleted!"
    else
      render json: { message: "Unable to delete transaction"}
    end
  end

  private

    def transaction_params
      params.permit(:counterparty, :amount, :date, :account_id)
    end

end
