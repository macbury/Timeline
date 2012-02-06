class AccountsController < ApplicationController
  before_filter :authenticate_user!

  def show
    @user = self.current_user
  end
end
