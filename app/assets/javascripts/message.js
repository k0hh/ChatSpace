$(function() {
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var $form = $(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      // url: $form.attr('messages'),
      // type: $form.attr('create'),
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
      
    })
    console.log(formData)
  })
})
