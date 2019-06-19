require 'pry'

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
    t_new = Transaction.new(transaction_params)

    #Create Debit Transactions
    if transaction_params[:debit] #Create Parent Transaction
      t_new.save
      t_new.parent_id = t_new.id
      t_new.percentage = 100
      t_new.save

      if transaction_params[:percentage] != 0 #Create Child Transactions
        Account.all.each_with_index do |a, i|
          t_child = Transaction.new(transaction_params)
          if a.main_account
            t_child.amount = t_child.calc_main_amount
          else
            t_child.amount = t_child.calc_split_amount
          end
          t_child.account_id = a.id
          t_child.parent_id = t_new.id
          t_child.save
        end
      end

    else #Create Credit Transaction
      binding.pry
      t_new.save
    end
    Account.update_account_totals
    render json: t_new
  end

  def update
    @transaction.update(account_id: 1)
    Account.update_account_totals
    render json: @transaction
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
