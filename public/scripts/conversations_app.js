$(() => {
  $(".conversation_title").click(function(){
     $(this).siblings(".conversations-container").toggle();
  });

  let conversationID = $(this).siblings(".conversation_id");

});





// $(() => {
//   $(".far").on('click', function(e) {
//     e.preventDefault();
//     $.ajax({
//       method: "POST",
//       url: "/postings",
//       data: {postingId: 5}
//     }).then((response) => {
//       console.log(response);
//     });;
//   });
//   });
