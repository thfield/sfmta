require 'test_helper'

class FareRoutesControllerTest < ActionController::TestCase
  setup do
    @fare_route = fare_routes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fare_routes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fare_route" do
    assert_difference('FareRoute.count') do
      post :create, fare_route: { fare_id: @fare_route.fare_id, route_id: @fare_route.route_id }
    end

    assert_redirected_to fare_route_path(assigns(:fare_route))
  end

  test "should show fare_route" do
    get :show, id: @fare_route
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @fare_route
    assert_response :success
  end

  test "should update fare_route" do
    patch :update, id: @fare_route, fare_route: { fare_id: @fare_route.fare_id, route_id: @fare_route.route_id }
    assert_redirected_to fare_route_path(assigns(:fare_route))
  end

  test "should destroy fare_route" do
    assert_difference('FareRoute.count', -1) do
      delete :destroy, id: @fare_route
    end

    assert_redirected_to fare_routes_path
  end
end
