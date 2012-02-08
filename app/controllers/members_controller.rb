class MembersController < ApplicationController
  before_filter :authenticate_user!
  before_filter :load_project!

  def index
    @members = @workspace.users
  end
end
