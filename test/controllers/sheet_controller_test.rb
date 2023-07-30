require "test_helper"

class SheetControllerTest < ActionDispatch::IntegrationTest
  test "should get creation" do
    get sheet_creation_url
    assert_response :success
  end
end
