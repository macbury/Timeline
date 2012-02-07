require "csv"
class TicketsController < ApplicationController
  before_filter :authenticate_user!
  before_filter :load_project!

  # GET /tickets
  # GET /tickets.json
  def index
    @tickets = @workspace.tickets.all
    respond_to do |format|
      format.json { render stream: true }
      format.csv { export_to_csv @tickets }
    end
  end

  # GET /tickets/1
  # GET /tickets/1.json
  def show
    @ticket = @workspace.tickets.find(params[:id])

    render partial: @ticket
  end

  # POST /tickets
  # POST /tickets.json
  def create
    @ticket = @workspace.tickets.new(params[:ticket])
    respond_to do |format|
      if @ticket.save
        format.json { render partial: @ticket, status: :created, location: [@workspace, @ticket], channel: workspace_path(@workspace) }
      else
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /tickets/1
  # PUT /tickets/1.json
  def update
    @ticket = @workspace.tickets.find(params[:id])

    respond_to do |format|
      if @ticket.update_attributes(params[:ticket])
        format.json { render partial: @ticket, channel: workspace_path(@workspace) }
      else
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tickets/1
  # DELETE /tickets/1.json
  def destroy
    @ticket = @workspace.tickets.find(params[:id])
    @ticket.destroy

    respond_to do |format|
      format.json { render partial: @ticket, channel: workspace_path(@workspace) }
    end
  end

  protected
    def load_project!
      @workspace = self.current_user.workspaces.find(params[:workspace_id])
    end

    def export_to_csv(tickets)
      csv_string = CSV.generate do |csv| 
        csv << ["ID", "Title", "Description"] 
        tickets.each do |ticket| 
          csv << [ticket.id, ticket.title, ticket.description] 
        end 
      end 
      send_data csv_string, 
                :type => 'text/csv; charset=iso-8859-1; header=present', 
                :disposition => "attachment; filename=tickets.csv" 
    end
end
