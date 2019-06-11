class Api::TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_transaction, only: [:update]

  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def show
    #Gets total of all parent transactions minus credits
    t_total = Transaction.get_transaction_totals
    render json: t_total
  end

  def create
    #Create parent debit
    if transaction_params[:debit] && transaction_params[:percentage].empty?
      t_new = Transaction.new(transaction_params)
      if t_new.save
        t_new.percentage = 100
        t_new.parent_id = t_new.id
        t_new.save
      end

    #Create child debits
    elsif transaction_params[:debit] && transaction_params[:percentage]
      Account.all.each_with_index do |a, i|
        t_new = Transaction.new(transaction_params)
        if a.main_account
          t_new.amount = t_new.calc_main_amount
        else
          t_new.amount = t_new.calc_split_amount
        end
        t_new.account_id = a.id
        t_new.parent_id = t_new.get_parent(i)
        t_new.save
      end

    #Create credit
    else
      t_new = Transaction.new(transaction_params)
      t_new.save
    end

    Account.update_account_totals
    render json: t_new
  end

  def update
    # @transaction.update = (account_id: 1)
    # Account.update_account_totals
    # render json: @transaction
  end

  # def destroy
  #   if @transaction.destroy
  #     render plain: "Deleted!"
  #   else
  #     render json: { message: "Unable to delete transaction"}
  #   end
  # end

  private

    def set_transaction
      @transaction = Transaction.find_by(id: params[:id])
    end

    def transaction_params
      params.require(:transaction).permit(:counterparty, :amount, :date, :account_id, :parent_id, :debit, :percentage)
    end

end
