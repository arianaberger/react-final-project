class API::AccountsController < ApplicationController

def dashboard
  render json: Account.all
end

end
