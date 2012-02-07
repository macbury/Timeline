class WorkspacesController < ApplicationController
  before_filter :authenticate_user!

  def index
    @workspaces = self.current_user.workspaces.all
  end

  def show
    @workspace = self.current_user.workspaces.find(params[:id])
    broadcast(workspace_path(@workspace), { test: "test" })
  end

  def new
    @workspace = self.current_user.workspaces.new
  end

  def edit
    @workspace = self.current_user.workspaces.find(params[:id])
  end

  def create
    @workspace = self.current_user.workspaces.new(params[:workspace])

    if @workspace.save
      @workspace.users << self.current_user
      redirect_to @workspace, notice: 'Workspace was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @workspace = Workspace.find(params[:id])

    if @workspace.update_attributes(params[:workspace])
      redirect_to @workspace, notice: 'Workspace was successfully updated.'
    else
      render action: "edit" 
    end
  end

  def destroy
    @workspace = Workspace.find(params[:id])
    @workspace.destroy

    redirect_to workspaces_url
  end
end
