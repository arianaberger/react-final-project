class Api::AccountsController < ApplicationController
  skip_before_action :verify_authenticity_token #included when testing with postman
  before_action :set_account, only: [:show, :update, :destroy]

  def index
    @accounts = Account.all
    render json: @accounts
  end

  def show
    account_total = @account.account_total
    render json: account_total
  end

  def create
    account = Account.new(account_params)
    if account.save
      render json: account
    else
      render json: { message: account.errors}, status: 400
    end
  end

  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: { message: "Unable to update account"}
    end
  end

  def destroy
    if @account.destroy
      render plain: "Deleted!"
    else
      render json: { message: "Unable to delete account"}
    end

  end

  private

    def set_account
      @account = Account.find_by(id: params[:id])
    end

      def account_params
        #add .require(:account) when form is added
        params.permit(:name, :main_account)
      end

end
