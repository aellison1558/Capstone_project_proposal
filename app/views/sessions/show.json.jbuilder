if @user
    json.extract! @user, :username, :id
end
