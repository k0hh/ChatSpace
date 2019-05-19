$(function() {
  function buildHTML(message){
    var image = ""
    if(message.image !== null) {
      image = `<img src= ${ message.image } class="lower-message__image" ></img> `
    }
    console.log(image)
    // var message = message.content ? `${ message.content }` : "";
    var html = `<div class="message" data-id="${message.id}">
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
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data.date)
      console.log(data.user_name)
      var html = buildHTML(data);
      console.log(html)
      $('.messages').append(html);
      $('#message_content').val(''); 
      $('.main__body').animate({scrollTop: $('.main__body')[0].scrollHeight});
     
    })
    .fail(function(){
      alert('errorです');
    })
    // $(function() {
    return false;
    // });
  })
})
