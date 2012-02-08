class MembersController < ApplicationController
  before_filter :authenticate_user!
  before_filter :load_project!

  def index
    @members = @workspace.users
  end

  def create
    params[:emails].split(",").map(&:strip).each do |email|
      user = User.invite! email: email
      @workspace.members.find_or_create_by_user_id user.id
    end
    redirect_to workspace_members_path(@workspace)
  end
end
