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
    console.log("NEXT!");

    // ****************** TIMER begins ***********************************
    document.getElementById('audiotag1').pause();
    document.getElementById('audiotag1').currentTime = 0;

    var seconds = 10;
    secondPassed = function() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "\"Time and tide wait for no one.\"";
        document.getElementById('audiotag1').play();
    } else {
        seconds--;
    }
}
    clearInterval(countdownTimer);
    var countdownTimer = setInterval('secondPassed()', 1000);

    // ******************** TIMER ends *******************************


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
      // FIGURE OUT BELOW. why isn't it working?
      // Disable the next button when there's no one in the queue
      console.log($("#participants li[data-id='"+id+"']"));
      $("#participants button[data-id='"+id+"']").prop("disabled", false);
      $("#destroy-list li[data-id='"+id+"']").remove();
      // ($('#destroy_list').remove(children("li").eq(0)));
    });
      // $('#queue').append("<li data-id="+id+">" + response.name + "</li>");
      // $button.prop('disabled',true);
    })

  $('#new_meeting').on('submit', function(event) {
    event.preventDefault();
    $this = $(this)
    $this.hide();
    // $form = $(event.target);
    $.ajax({
      url: "/meeting/new",
      type: "GET",
      dataType: "HTML"
    }).done(function(response){
      console.log(response)
      $('p.lead').append(response);
    })
  })
})
