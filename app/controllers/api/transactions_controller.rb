class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_transaction, only: [:destroy]

  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def create
    t_new = Transaction.new(transaction_params)

    #Create parent debit
    if transaction_params[:debit] && transaction_params[:percentage].empty?
      if t_new.save
        t_new.parent_id = t_new.id
        t_new.save
      end
      render json: t_new

    #Create child debit
    elsif transaction_params[:debit] && transaction_params[:percentage]
      Account.all.each do |a|
        if a.id === 1
          t_new.amount = t_new.calc_main_amount
        else
          t_new.amount = t_new.calc_split_amount
        end
        t_new.save
        Account.update_account_total(t_new.account_id)
      end

    else
      #Create credit
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
