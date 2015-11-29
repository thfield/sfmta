class FareRoutesController < ApplicationController
  before_action :set_fare_route, only: [:show, :edit, :update, :destroy]

  # GET /fare_routes
  # GET /fare_routes.json
  def index
    @fare_routes = FareRoute.all
  end

  # GET /fare_routes/1
  # GET /fare_routes/1.json
  def show
  end

  # GET /fare_routes/new
  def new
    @fare_route = FareRoute.new
  end

  # GET /fare_routes/1/edit
  def edit
  end

  # POST /fare_routes
  # POST /fare_routes.json
  def create
    @fare_route = FareRoute.new(fare_route_params)

    respond_to do |format|
      if @fare_route.save
        format.html { redirect_to @fare_route, notice: 'Fare route was successfully created.' }
        format.json { render :show, status: :created, location: @fare_route }
      else
        format.html { render :new }
        format.json { render json: @fare_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fare_routes/1
  # PATCH/PUT /fare_routes/1.json
  def update
    respond_to do |format|
      if @fare_route.update(fare_route_params)
        format.html { redirect_to @fare_route, notice: 'Fare route was successfully updated.' }
        format.json { render :show, status: :ok, location: @fare_route }
      else
        format.html { render :edit }
        format.json { render json: @fare_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fare_routes/1
  # DELETE /fare_routes/1.json
  def destroy
    @fare_route.destroy
    respond_to do |format|
      format.html { redirect_to fare_routes_url, notice: 'Fare route was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fare_route
      @fare_route = FareRoute.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def fare_route_params
      params.require(:fare_route).permit(:fare_id, :route_id)
    end
end
