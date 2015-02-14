require 'pry'
require 'sinatra'
require 'httparty'

client_id = ENV["GITHUB_CLIENT_ID"]
client_secret = ENV["GITHUB_CLIENT_SECRET"]
callback = "http://localhost:4567/oauth_callback_route"

enable :sessions
set :session_secret, 'secret_lovers'

get "/" do
  if session.has_key?('access_token')
    binding.pry
  end

  base_url = "https://github.com/login/oauth/authorize"
  state = SecureRandom.urlsafe_base64

  session["state"] = state
  query = {
    state: state,
    scope: "user",
    client_id: client_id
  }

  encoded_query = URI.encode_www_form(query)
  @url = base_url + "?" + encoded_query

  if session["access_token"]
    response = HTTParty.get("https://api.github.com/user?access_token="+session["access_token"],
                            headers: {"User-Agent" => "demo_app"})
    @image_url = response["avatar_url"]
  end
  render(:erb, :index)
end

get "/oauth_callback_route" do

  if session["state"] == params["state"]
    response = HTTParty.post("https://github.com/login/oauth/access_token",
                             body: {
                               client_id: client_id,
                               client_secret: client_secret,
                               code: params["code"],
                               redirect_uri: "http://127.0.0.1:4567/oauth_callback_route"

                             },
                             headers: {
                               "accept" => "application/json"
                             }

                             )
    session["access_token"] = response["access_token"]

  end
  redirect ("/")
end

get "/logout" do
  session["access_token"] = nil
  redirect("/")
end
