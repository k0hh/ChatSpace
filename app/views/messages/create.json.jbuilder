json.content  @message.content
json.user_name  @message.user.name
json.id  @message.id
json.image  @message.image.url
json.date   @message.created_at.strftime("%Y/%m/%d $H:%M")
json.group_id @message.group_id
json.user_id @message.user_id