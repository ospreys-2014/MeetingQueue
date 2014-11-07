console.log("Hello");
$(document).ready(function() {

  $('#participants').on('click','button', function(event) {
    event.preventDefault();
    // console.log($(event.target).data("id"));
    var id = $(event.target).data("id");
    $button = $(event.target);
    $.ajax({
      url: "/participant/" + id,
      type: "PUT",
      data: {participant: { q_status : true}},
      dataType: "JSON"
    }).done(function(response){
      console.log(id);
      console.log(response);
      $('#queue').append("<li data-id="+id+">" + response.name + "</li>");
      $button.prop('disabled',true);
    })
  });
})
