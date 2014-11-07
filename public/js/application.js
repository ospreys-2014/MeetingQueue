$(document).ready(function() {

  $('#participants').on('click','button', function(event) {
    event.preventDefault();
    // console.log($(event.target).data("id"));
    var id = $(event.target).data("id");
    var $button = $(event.target);
    $.ajax({
      url: "/participant/" + id,
      type: "PUT",
      data: {participant: { q_status : true}},
      dataType: "JSON"
    }).done(function(response){
      $('#destroy-list').append("<li data-id="+id+">" + response.name + "</li>");
      $button.prop('disabled',true);
    })
  })

  $('#queue').on('click','button', function(event) {
    event.preventDefault();
    console.log("Howdy!")
    var id = $('#destroy-list').children("li").eq(0).data("id");
    console.log(id)
    var $button = $(event.target);
    console.log($button)
    $.ajax({
      url: "/participant/" + id,
      type: "PUT",
      data: {participant: {q_status : false}},
      dataType: "JSON"
    }).done(function(){
      console.log("Helloooooooooo?");
      // jQuery('').button("refresh");
      console.log($("#destroy-list li[data-id='"+id+"']"))
      $("#participants li[data-id='"+id+"']'").removeAttr("disabled");
      $("#destroy-list li[data-id='"+id+"']").remove();
      // ($('#destroy_list').remove(children("li").eq(0)));
    });
  })
})
