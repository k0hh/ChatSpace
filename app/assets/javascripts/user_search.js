$(function() {

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">ユーザー名</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>` 
  return html;
  }


  $("#user-search-field").on('keyup paste', function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/groups/new',
      data:{keyword: input},
      dataType: 'json'
    })

    .done(function(users){
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        })
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
      
    })
  });
});
