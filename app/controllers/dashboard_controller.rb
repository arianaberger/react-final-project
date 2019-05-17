class DashboardController < ApplicationController

  def home
    render json: Account.all
  end

end
