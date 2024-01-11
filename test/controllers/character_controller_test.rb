require "test_helper"

class CharacterControllerTest < ActionDispatch::IntegrationTest
  test "should get view" do
    get character_view_url
    assert_response :success
  end
end
