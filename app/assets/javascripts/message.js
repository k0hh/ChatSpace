// message.js 自動更新LGTM後

$(function(){
  function buildHTML(message){
    var image = ""
    if(message.image !== null) {
      image = `<img src= ${ message.image } class="lower-message__image" ></img> `
    }
    var html = `<div class="message" data-message-id="${message.id}">
                <div class="message__top">
                  <p class="message__member">
                    ${message.user_name}
                  </p>
                  <p class="message__time">
                    ${message.date}
                  </p>
                </div>
                <div class="message__bottom">
                  <p class="message__member__message">
                    ${message.content}
                  </p>
                  ${image}
                </div>
              </div>`
    return html;
  }

  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#textbox','#message_image').empty(); 
      $(".new_message")[0].reset(); 
      $('.main__body').animate({scrollTop: $('.main__body')[0].scrollHeight});
    })
    .fail(function(){
      alert('errorです');
    })
    return false;
  })

  var reloadMessages = function() {
    var last_message_id = $(".message").last().data("message-id");
    var path = location.pathname
    var path2 = path.split('/')
    var path3 = path2[2]
    console.log(path3)
    
    $.ajax({
      url: `/groups/${path3}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      if (messages.length !== 0  ) {
        for ( message of messages ){
          if (message.group_id == path3){
            insertHTML = buildHTML(message);
            $('#' + path3 + '.messages').append(insertHTML);
            $('.main__body').animate({scrollTop: $('.main__body')[0].scrollHeight});
          }
        }
      }
    })
    .fail(function() {
      console.log('errorです');
    });
  };
  setInterval(reloadMessages,5000);
})


